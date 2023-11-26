# DailyInsight

![DailyInsight](https://socialify.git.ci/madhvesh23/DailyInsight/image?description=1&descriptionEditable=DailyInsight%20website%20with%20user-defined%20categories%20allow%20users%20to%20modify%20their%20news%20consumption%20experience.&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark)


## MERN Stack DailyInsight Application

This repository contains the code for a basic DailyInsight application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to view and post news articles, providing a seamless and responsive user experience.
## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js and npm (Node Package Manager)              
- MongoDB    
- Git (optional)
## Getting Started



1. Clone the Repository

```bash
git clone https://github.com/madhvesh23/DailyInsight.git
cd DailyInsight

```
2. Install Dependencies

```bash
cd client
npm install
```
```bash
cd ../server
npm install
```
3. In your Linux Instance, create a `.env` file    
- Create Environment Variables    
- Inside the .env file, create the following environment variables:

```bash
# MongoDB connection URL
MONGO_URL= //database url

# Server port
PORT=5000
```

4. Start the application    
 - Open two separate terminal windows:    
 - In first terminal, navigate to the client directory and start the React app:
```bash
cd client
npm start

```
```bash
cd server
npm start

```
## Features

- User registration and authentication.
- View a feed of news articles.
- Bookmark articles.
- Responsive design for mobile and desktop.


## Folder Structure

```bash

mern-DailyInsight-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── index.js
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── ...
├── .gitignore
└── README.md

```
## Contributing

Contributions are always welcomed!🙏

Feel free to contribute to this project by creating pull requests. For major changes, please open an issue first to discuss the proposed changes.


## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
