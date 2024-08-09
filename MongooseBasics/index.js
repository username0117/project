const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
  .then(() => {
    console.log("CONNECTION OPEN!!!");

    // Define schema
    const movieSchema = new mongoose.Schema({
      title: String,
      year: Number,
      score: Number,
      rating: String
    });

    // Create model
    const Movie = mongoose.model('Movie', movieSchema);

    // Create a new movie instance
    const newMovie = new Movie({
      title: 'Amadeus',
      year: 1986,
      score: 9.2,
      rating: 'R'
    });

    // Save the new movie to the database
    return newMovie.save();
  })
  .then((movie) => {
    console.log('Movie Saved:', movie);

    // Query the database for the saved movie
    return Movie.findOne({ title: 'Amadeus' });
  })
  .then((movie) => {
    console.log('Movie Found:', movie);
  })
  .catch((err) => {
    console.error('Error:', err);
  });

  