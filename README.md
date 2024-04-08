# Game Server Management Panel

This project aims to create a game server management panel with user registration and authentication features using Node.js, Express, MySQL, and Docker.

## 🚀 Features

- User Registration
- User Login
- Docker Integration
- Cross-platform (Linux and Windows)

## 📂 Project Structure

panel-backend/

├── api/

│ └── users/

│ └── auth.js

├── mysql/

│ └── db.js

├── .env

├── package.json

└── server.js

## 🛠️ Getting Started

### Prerequisites

- Node.js
- MySQL Server
- Docker (optional for Docker integration)

### 📦 Installation

1. **Clone the repository:**

   git clone https://github.com/yourusername/panel-backend.git

2. **Navigate to the project directory:**
   cd panel-backend

3. **Install dependencies:**
   npm install

4. **Run the installation script:**

   - **Linux**:
     ./install.sh

   - **Windows** (Run as Administrator):
     bash install.sh

   The installation script performs the following tasks:

   - Sets up the MySQL database and tables
   - Updates the `.env` file with database credentials and port number

### ⚙️ Configuration

- Update the `.env` file with your MySQL database credentials and desired port number.

## 📝 Usage

To start the server, run:

npm start

Open [http://localhost:3000](http://localhost:3000) in your web browser to access the panel.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
