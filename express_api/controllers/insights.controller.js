// Importing required modules
import fs from 'fs'; // File system module for reading and writing files
import path from 'path'; // Path module for handling and transforming file paths
import { fileURLToPath } from 'url'; // Utility to get the file path of the current module in ES modules

// Convert __filename and __dirname for ES modules
// __filename represents the absolute path of the current module file
const __filename = fileURLToPath(import.meta.url);
// __dirname represents the directory path of the current module file
const __dirname = path.dirname(__filename);

// Define the relative path to the JSON file storing insights data
// The file is located two directories up from the current module in the `python` folder
const insightsFilePath = path.join(__dirname, '../../python/insights.json');

// Function to handle GET requests to retrieve insights
// `req` is the HTTP request object
// `res` is the HTTP response object
const getInsights = (req, res) => {
    // Read the insights file asynchronously
    fs.readFile(insightsFilePath, 'utf-8', (err, data) => {
        if (err) {
            // If an error occurs during file reading, send a 500 status with an error message
            return res.status(500).send('Error reading insights');
        }
        // Parse the JSON data and send it in the response
        res.json(JSON.parse(data));
    });
};

// Function to handle POST requests to save insights
// Expects JSON data in `req.body` to be saved
const saveInsights = (req, res) => {
    // Write the data to the insights file asynchronously
    fs.writeFile(insightsFilePath, JSON.stringify(req.body), (err) => {
        if (err) {
            // If an error occurs during file writing, send a 500 status with an error message
            return res.status(500).send('Error saving insights');
        }
        // Send a success message upon successful saving of data
        res.send('Insights saved successfully');
    });
};

// Exporting the functions to allow their usage in other modules
export { saveInsights, getInsights };
