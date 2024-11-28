import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the processed data file
const dataFilePath = path.join(__dirname, '../../python/processed_data.json');

// Function to get processed data
const getData = (req, res) => {
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        res.json(JSON.parse(data));
    });
};

// Function to save processed data
const saveData = (req, res) => {
    fs.writeFile(dataFilePath, JSON.stringify(req.body), (err) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.send('Data saved successfully');
    });
};

export {saveData,getData}