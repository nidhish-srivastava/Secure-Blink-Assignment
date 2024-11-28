// Importing required modules
import fs from 'fs'; // File system module to handle file operations
import path from 'path'; // Path module to handle and transform file paths
import { fileURLToPath } from 'url'; // Utility to get the file path of the current module in ES modules

// Convert __filename and __dirname for ES modules
// __filename represents the absolute path of the current module file
const __filename = fileURLToPath(import.meta.url);
// __dirname represents the directory path of the current module file
const __dirname = path.dirname(__filename);

// Define the relative path to the JSON file storing processed data
// Here, the file is located two directories up from the current module in the `python` folder
const dataFilePath = path.join(__dirname, '../../python/processed_data.json');

// Function to handle GET requests to retrieve processed data
// `req` represents the HTTP request object
// `res` represents the HTTP response object
const getData = (req, res) => {
    // Read the data file asynchronously
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            // If an error occurs during file reading, send a 500 status with an error message
            return res.status(500).send('Error reading data');
        }
        // Parse the JSON data and send it in the response
        res.json(JSON.parse(data));
    });
};

// Function to handle POST requests to save processed data
// `req.body` is expected to contain the JSON data to be saved
const saveData = (req, res) => {
    // Write the data to the file asynchronously
    fs.writeFile(dataFilePath, JSON.stringify(req.body), (err) => {
        if (err) {
            // If an error occurs during file writing, send a 500 status with an error message
            return res.status(500).send('Error saving data');
        }
        // Send a success message upon successful saving of data
        res.send('Data saved successfully');
    });
};

// Exporting the functions to use them in other modules
export { saveData, getData };
