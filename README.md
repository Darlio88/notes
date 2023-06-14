# React Native Notes Saving Application

This is a full-stack mobile application built using React Native, MongoDB, Express, and Expo. The application allows users to save and manage their notes on their mobile devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up and sign in to the application using their email and password.
- Note creation: Users can create new notes and save them to the application.
- Note editing: Users can edit their existing notes.
- Note deletion: Users have the ability to delete their own notes.
- Note categorization: Users can assign categories or tags to their notes for easy organization.
- Search functionality: Users can search for specific notes based on keywords or categories.

## Technologies Used

The following technologies were used to develop this application:

- **React Native**: A JavaScript framework for building native mobile applications.
- **Expo**: An open-source platform for building and deploying React Native applications.
- **MongoDB**: A NoSQL database used to store user and note data.
- **Express.js**: A back-end framework for building RESTful APIs.
- **Node.js**: A JavaScript runtime used to run the server-side code.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Passport**: An authentication middleware for Node.js.
- **JWT**: JSON Web Tokens for secure authentication.
- **Axios**: A JavaScript library used for making HTTP requests from the client-side.
- **React Navigation**: A library for handling navigation and routing in React Native applications.

## Prerequisites

Before running this application, make sure you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org) for your operating system.
- Expo CLI: Install Expo CLI globally by running `npm install -g expo-cli`.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repository.git`
2. Navigate to the project directory: `cd your-repository`
3. Install the dependencies: `npm install`

## Installation

After cloning the repository and installing the dependencies, you need to configure the application to run locally.

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

```
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

- `MONGODB_URI` should be the connection string to your MongoDB database.
- `JWT_SECRET` should be a random string used for JWT token encryption.

## Usage

To run the application locally, use the following command:

```
expo start
```

This will start the Expo development server and open the Expo DevTools in your browser. From there, you can choose to run the application on a physical device or an emulator.

## API Routes

The following API routes are available:

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in to an existing user account.
- `POST /api/auth/logout`: Log out the currently authenticated user.
- `GET /api/notes`: Get a list of all notes for the authenticated user.
- `POST
## screenshots of the mobile application

<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-08-59_GrEtkftyik.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898289963' alt='screenshot'  />
<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-08-52_SadgGaZrF4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898290171' />
<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-08-35_pi7dtU4st5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898289965' />
<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-08-39_aIrHH-H0j.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898289635' />
<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-08-44_jbXNB6pZEG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898289916'  />
<img src='https://ik.imagekit.io/x761p7oyp/notes/photo_2022-09-11_15-18-03_9Vkz280yx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1662898721388'  />




