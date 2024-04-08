#!/bin/bash

# Check OS type
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    OS="Linux"
    elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    OS="Windows"
else
    echo "Unsupported OS."
    exit 1
fi

# Function to update .env file
update_env() {
    sed -i "s/DB_HOST=.*/DB_HOST=localhost/g" .env
    sed -i "s/DB_USER=.*/DB_USER=panel_user/g" .env
    sed -i "s/DB_PASSWORD=.*/DB_PASSWORD=password123/g" .env
    sed -i "s/DB_DATABASE=.*/DB_DATABASE=panel_backend/g" .env
    sed -i "s/PORT=.*/PORT=$PORT/g" .env
}

# Function to create MySQL database and tables
create_database() {
    mysql -u root -ppassword123 -e "CREATE DATABASE IF NOT EXISTS panel_backend; \
                                  USE panel_backend; \
                                  CREATE TABLE IF NOT EXISTS users ( \
                                      id INT(11) NOT NULL AUTO_INCREMENT, \
                                      username VARCHAR(255) NOT NULL, \
                                      email VARCHAR(255) NOT NULL UNIQUE, \
                                      password VARCHAR(255) NOT NULL, \
                                      PRIMARY KEY (id) \
                                  ); \
                                  CREATE USER IF NOT EXISTS 'panel_user'@'localhost' IDENTIFIED BY 'password123'; \
                                  GRANT ALL PRIVILEGES ON panel_backend.* TO 'panel_user'@'localhost'; \
    FLUSH PRIVILEGES;"
}

# Main installation steps
echo "Starting installation..."

# Prompt user for port number
read -p "Enter the port number for the server (default is 3000): " PORT
PORT=${PORT:-3000}

# Update .env file
update_env

# Create MySQL database and tables
create_database

# Display installation instructions
echo "Installation completed successfully!"
echo "To start the server, run the following commands:"
echo "npm install"
echo "npm start"
echo "Open http://localhost:$PORT in your web browser to access the panel."
