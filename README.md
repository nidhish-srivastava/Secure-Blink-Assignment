# Secure Blink Assignment

## Table of Contents
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Navigate to the Project Directory](#2-navigate-to-the-project-directory)
- [Steps to Run](#steps-to-run)
  - [1. Running Python Data Processing Script](#1-running-python-data-processing-script)
  - [2. Running Express.js Server](#2-running-expressjs-server)
- [API Endpoints](#api-endpoints)

---

## Requirements
Make sure you have the following installed on your system:
- [Python 3.x](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/) (Recommended version: v14 or above)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/) (Version control)

---

## Getting Started
Follow these steps to get the project up and running locally:

### 1. Clone the Repository
Clone the repository to your local machine using Git:
```bash
git clone https://github.com/nidhish-srivastava/Secure-Blink-Assignment.git
```

### 2. Navigate to the Project Directory
Go into the project directory:
```bash
cd Secure-Blink-Assignment
```

 #### Express js code - `cd express_api`
 #### Python code - `cd python`
## Steps to Run:

### 1. Running Python Data Processing Script:
- The Titanic dataset CSV file in the python directory.
Dataset link - **https://www.kaggle.com/datasets/heptapod/titanic**(refer to link for dataset explaination)
- Run the script: `python data_processing.py`.
- This will process the data, normalize it, generate statistics, and send them to the Express.js API.

### 2. Running Express.js Server:
- `node index.js`.
- The server will listen on port `3000` for incoming data from the Python script.



## API Endpoints:
1. **POST `/data`**: Sends processed data to the server.
2. **POST `/stats`**: Sends statistics data.
3. **POST `/insights`**: Sends insights data.
4. **GET `/data`** : Fetches processed data from the csv file
5. **GET `/stats`** : Fetches stats
6. **GET `/insights`** : Fetches insights

## Postman API documentation
**https://api.postman.com/collections/32317711-20917173-b6df-4db7-bbb9-7dd10baebf9a?access_key=PMAT-01JDSERE10WEJ4MD4H2YSKMD5X**
