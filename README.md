# Titanic Data Processing and API Integration

## Requirements:
1. Python 3.x
2. Node.js with Express.js
3. Install Python dependencies: `pip install pandas requests`
4. Install Node.js dependencies: `npm install express`

## Steps to Run:

### 1. Running Python Data Processing Script:
- Place the Titanic dataset CSV file in the project directory.
Dataset link - **https://www.kaggle.com/datasets/heptapod/titanic**
- Run the script: `python data_processing.py`.
- This will process the data, normalize it, generate statistics, and send them to the Express.js API.

### 2. Running Express.js Server:
- `node index.js`.
- The server will listen on port `3000` for incoming data from the Python script.

## API Endpoints:
1. **POST `/data`**: Sends processed passenger data to the server.
2. **POST `/stats`**: Sends statistics data.
3. **POST `/insights`**: Sends insights data.
