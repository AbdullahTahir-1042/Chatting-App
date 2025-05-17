📞 CollabMeet
CollabMeet is a full-stack web application inspired by Microsoft Teams. It enables users to create conversations, exchange messages in real-time, and manage virtual meeting spaces. Built using the MERN stack (MongoDB, Express, React, Node.js), it supports user authentication, message persistence, and a clean, responsive UI.

🚀 Features
🔒 User Authentication (JWT-based)

💬 Real-time chat interface

📁 Persistent conversations with messages

📝 Start new calls / meeting rooms

📜 Conversation and message sorting by timestamp

📦 RESTful API using Express.js

🧠 State management with Redux

🧰 Tech Stack
Frontend

React.js

Redux for state management

Material-UI for components

Axios for HTTP requests

Backend

Node.js

Express.js

MongoDB with Mongoose ODM

JWT Authentication

bcrypt for password hashing

📂 Folder Structure
bash
Copy
Edit
CollabMeet/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── actions/        # Redux action creators
│   │   ├── components/     # Chat UI components
│   │   ├── views/          # Page-level views (Chat, Auth)
│   │   └── App.js          # Main app entry
│   └── package.json
│
├── server/                 # Express Backend
│   ├── models/             # Mongoose models (User, Conversation, Message)
│   ├── routes/             # Express routes
│   ├── controllers/        # Logic for routes (if modularized)
│   └── index.js            # Server entry point
│
└── README.md
🛠️ Installation & Setup
Prerequisites
Node.js and npm installed

MongoDB running locally or a MongoDB Atlas URI

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/CollabMeet.git
cd CollabMeet
2. Setup Backend
bash
Copy
Edit
cd server
npm install
# Create a .env file
touch .env
.env Configuration
ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
bash
Copy
Edit
npm start
3. Setup Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
