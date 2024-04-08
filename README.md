Game Server Management Panel
This project aims to create a game server management panel with user registration and authentication features using Node.js, Express, MySQL, and Docker.

Features
User Registration
User Login
Docker Integration
Cross-platform (Linux and Windows)
Project Structure
bash
Copy code
panel-backend/
├── api/
│ └── users/
│ └── auth.js
├── mysql/
│ └── db.js
├── .env
├── package.json
└── server.js
Getting Started
Prerequisites
Node.js
MySQL Server
Docker (optional for Docker integration)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/panel-backend.git
Navigate to the project directory:

bash
Copy code
cd panel-backend
Install dependencies:

bash
Copy code
npm install
Run the installation script:

Linux:

bash
Copy code
./install.sh
Windows (Run as Administrator):

bash
Copy code
bash install.sh
The installation script performs the following tasks:

Sets up the MySQL database and tables
Updates the .env file with database credentials and port number
Configuration
Update the .env file with your MySQL database credentials and desired port number.
Usage
To start the server, run:

bash
Copy code
npm start
Open http://localhost:3000 in your web browser to access the panel.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License - see the LICENSE file for details.
