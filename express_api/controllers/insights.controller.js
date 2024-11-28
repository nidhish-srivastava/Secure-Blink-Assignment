import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the insights data file
const insightsFilePath = path.join(__dirname, '../../python/insights.json');

// Function to get insights
const getInsights = (req, res) => {
    fs.readFile(insightsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading insights');
        }
        res.json(JSON.parse(data));
    });
};

// Function to save insights
const saveInsights = (req, res) => {
    fs.writeFile(insightsFilePath, JSON.stringify(req.body), (err) => {
        if (err) {
            return res.status(500).send('Error saving insights');
        }
        res.send('Insights saved successfully');
    });
};

export {saveInsights,getInsights}