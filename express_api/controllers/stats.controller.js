import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the stats data file
const statsFilePath = path.join(__dirname, '../../python/stats.json');

// Function to get stats
export const getStats = (req, res) => {
    fs.readFile(statsFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading stats');
        }
        res.json(JSON.parse(data));
    });
};

// Function to save stats
export const saveStats = (req, res) => {
    fs.writeFile(statsFilePath, JSON.stringify(req.body), (err) => {
        if (err) {
            return res.status(500).send('Error saving stats');
        }
        res.send('Stats saved successfully');
    });
};
