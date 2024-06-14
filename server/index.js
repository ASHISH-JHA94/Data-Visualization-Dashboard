const express = require(`express`);
const app = express();
const dotenv = require(`dotenv`);
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const Data=require("./models/data")




// dotenv.config({path : `.env`})
require('dotenv').config();
const PORT = process.env.PORT || 8080;
console.log(process.env.MONGO_URL);

/*MONGODB CONNECTION START*/
const MONGO_URL = process.env.MONGO_URL ;

// cors
const cors=require("cors");
app.use(cors())

// Check if MONGO_URL is defined
if (!MONGO_URL) {
    console.log("MONGO_URL is not defined in the environment variables.");
    process.exit(1); // Terminate the application
}

// MongoDB connection
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("Error Connecting to Database", err)
})
/*MONGODB CONNECTION END*/

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    console.log("server started");
})



// Define the route to get data
app.get('/getData', async (req, res) => {
    try {
        console.log("req recieved");
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})