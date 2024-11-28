import pandas as pd
import json
import requests

# Load your dataset
try:
    df = pd.read_csv('train.csv')
except FileNotFoundError as e:
    print(f"Error: The dataset file was not found. {e}")
    exit(1)

# Data Cleaning
# Drop columns that are entirely zeros
df = df.loc[:, (df != 0).any(axis=0)]

# Drop duplicate rows
df.drop_duplicates(inplace=True)

# Data Transformation
# Normalize the 'Age' and 'Fare' columns
df['Age'] = (df['Age'] - df['Age'].mean()) / df['Age'].std()
df['Fare'] = (df['Fare'] - df['Fare'].mean()) / df['Fare'].std()

# Ensure correct column names
df.rename(columns={'Passengerid': 'PassengerId', '2urvived': 'Survived'}, inplace=True)

# Data Analysis
# Compute basic statistics
stats = df.describe().to_dict()

# Generate insights
insights = {
    'mean_age': df['Age'].mean(),
    'median_fare': df['Fare'].median(),
    'gender_distribution': df['Sex'].value_counts(normalize=True).to_dict()
}

# Save processed data
processed_data = df.to_json(orient='records')
try:
    with open('processed_data.json', 'w') as f:
        json.dump(json.loads(processed_data), f)  # Save as a JSON array, not a string
except IOError as e:
    print(f"Error saving processed data: {e}")
    exit(1)

# Save analysis results
try:
    with open('stats.json', 'w') as f:
        json.dump(stats, f)
    with open('insights.json', 'w') as f:
        json.dump(insights, f)
except IOError as e:
    print(f"Error saving analysis results: {e}")
    exit(1)

print("Data processing complete. Processed data and analysis results have been saved.")

# Load processed data
with open('processed_data.json', 'r') as f:
    processed_data = json.load(f)

with open('stats.json', 'r') as f:
    stats = json.load(f)

with open('insights.json', 'r') as f:
    insights = json.load(f)

# Send data to Express.js API
try:
    response = requests.post('http://localhost:3000/data', json=processed_data)
    if response.status_code != 200:
        print(f"Error sending processed data: {response.status_code}, {response.text}")
    else:
        print(f"Processed data saved successfully with status code: {response.status_code}")

    response = requests.post('http://localhost:3000/stats', json=stats)
    if response.status_code != 200:
        print(f"Error sending stats: {response.status_code}, {response.text}")
    else:
        print(f"Stats saved successfully with status code: {response.status_code}")

    response = requests.post('http://localhost:3000/insights', json=insights)
    if response.status_code != 200:
        print(f"Error sending insights: {response.status_code}, {response.text}")
    else:
        print(f"Insights saved successfully with status code: {response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"Error sending data to Express.js: {e}")