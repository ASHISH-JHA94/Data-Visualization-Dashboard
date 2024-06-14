const mongoose = require('mongoose');
const fs = require('fs');




// Define the schema
const dataSchema = new mongoose.Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

// Create the model and export

module.exports = mongoose.model('Data',dataSchema);


// Read JSON file
// const jsonData = JSON.parse(fs.readFileSync('../jsondata.json', 'utf-8'));

// // Connect to MongoDB and insert data
// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//       console.log('Connected to MongoDB');
//       return DataModel.insertMany(jsonData);
//   })
//   .then(() => {
//       console.log('Data inserted successfully');
//       mongoose.disconnect();
//   })
//   .catch(err => {
//       console.error('Error:', err);
//   });
