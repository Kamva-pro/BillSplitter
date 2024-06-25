# BillSplitter

## Project Overview
BillSplitter is a mobile application designed to simplify the process of splitting bills at restaurants. Users can upload the menu of a restaurant, and the app will use Optical Character Recognition (OCR) to extract the menu data. Once the data is extracted and saved, users can select their meals, and the app will handle the bill splitting.

## Table of Contents
- [Purpose](#purpose)
- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Development Status](#development-status)
- [Contributing](#contributing)
- [License](#license)

## Purpose
The primary goal of BillSplitter is to provide a seamless and efficient way for users to split their restaurant bills. By leveraging OCR technology, the app minimizes the hassle of manually inputting menu items, making the process quick and error-free.

## Features
- **Menu Upload**: Users can upload a photo of the restaurant menu.
- **OCR Processing**: The app extracts menu data using OCR technology.
- **Data Storage**: Extracted menu data is saved for easy access.
- **Meal Selection**: Users can select their meals from the saved menu.
- **Bill Splitting**: The app calculates and splits the bill based on selected meals.

## Technologies
- **Frontend**: React Native
- **Backend**: Python
- **OCR**: Tesseract or a similar OCR library
- **API**: Django REST framework or Flask for API development

## Setup and Installation

### Backend (Python)
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/BillSplitter.git
   cd BillSplitter/backend
2. **Create a Virtual Environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
4. Run the server:
   ```bash
   python manage.py runserver

## Frontend (React Native)
1. Navigate to the Frontend Directory:
   ```bash
   cd ../frontend
2. Install Dependencies:
   ```bash
   npm install
3. Run the app:
   ```bash
   npx react-native run-android # For Android
   npx react-native run-ios     # For iOS


