# 📞 CollabMeet
CollabMeet is a full-stack web application inspired by Microsoft Teams. It enables users to create conversations, exchange messages in real-time, and manage virtual meeting spaces. Built using the MERN stack (MongoDB, Express, React, Node.js), it supports user authentication, message persistence, and a clean, responsive UI.

# 🚀 Features
* 🔒 User Authentication (JWT-based)

* 💬 Real-time chat interface

* 📁 Persistent conversations with messages

* 📝 Start new calls / meeting rooms

* 📜 Conversation and message sorting by timestamp

* 📦 RESTful API using Express.js

* 🧠 State management with Redux

# 🧰 Tech Stack

* Frontend

  * React.js

  * Redux for state management

  * Material-UI for components

  * Axios for HTTP requests

* Backend

  * Node.js

  * Express.js

  * MongoDB with Mongoose ODM

  * JWT Authentication

  * bcrypt for password hashing
    
# Installation and SetUp

* Clone the Repository

        git clone https://github.com/yourusername/CollabMeet.git
        cd CollabMeet
* Setup Backend

      cd server
      npm install
# Create a .env file
     touch .env
.env Configuration

       MONGO_URI=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret
 Run on Terminal
 
         npm start
3. Setup Frontend

       cd ../client
       yarn install
       yarn start
