# Project Description: 
The "Petshop Doguito" project is a product management system for a pet shop. It was developed using Node.js, Express.js, MySQL2, Sequelize, and other tools to ensure an efficient and scalable development environment.

The project structure is organized and modular, with folders dedicated to different aspects of the application. The "assets" folder contains JavaScript files responsible for front-end validation and interactivity logic. The "public" folder houses CSS files that define the visual style of the application, as well as images related to the products and the pet shop's visual identity.

The server is configured in the "server" directory, with separate files for general configurations, controllers for managing HTTP routes, and models for database interaction via Sequelize. The "src" folder contains HTML and EJS views that make up the different pages of the application, such as the product registration form, product listing, and confirmation pages for registration and updates.

In summary, "Petshop Doguito" is an application that allows users to register, view, edit, and remove products intuitively and efficiently, providing a friendly experience for pet shop users.

🚧 Status: In development 🚧

# Features
- [x] Product Registration
- [x] Product Query
- [x] Data Update
- [x] Product Deletion

# Project Structure
## assets/js
- JavaScript files responsible for front-end validation and interactivity logic

## config/
- Project configuration files

## public/css
- Page styling files
  - **base**: Base styling files for pages and components
  - **components**: Styling files for components

## public/img
- Project images
  - **products**: Product images

## server
- General server configuration files
  - **controllers**: Configuration files for controllers to manage HTTP routes
  - **db**: Database connection files
  - **migrations**: Migration files used in the project when necessary
  - **models**: Configuration files for models to interact with the database via Sequelize
  - **routes**: Route files related to product registration, display, update, and deletion
  - **index.js**: Server configuration and initialization file

## src/view
- HTML and EJS view files that make up the different pages of the application

# Download the project and install the dependencies:

`git clone https://github.com/fl0101/petshop-doguito.git`

## Enter the project directory:
`cd petshot-doguito/`

## Development Dependencies:
These are the dependencies needed to develop or run the application:

* node
* npm
* Visual Studio Code
* sequelize
* mysql2
* express
* ejs

## Steps to Install Node.js
* Download and Install Node.js:

Go to the [official Node.js website](https://nodejs.org/en) and download the LTS version recommended for most users. Follow the installation instructions specific to your operating system (Windows, macOS, or Linux).

* Verify the Installation:

After installing Node.js, open the terminal (or Command Prompt on Windows) and verify the installed Node.js and npm versions with the following commands:

`node -v`
`npm -v`

You should see the installed version numbers, confirming that the installation was successful.

## Steps to Install Visual Studio Code
Visual Studio Code (VS Code) is a lightweight but powerful source code editor developed by Microsoft. It supports various programming languages and offers a wide range of extensions to customize and extend its functionality.

* System Requirements: 
  - Windows: Windows 7, 8, 10, or higher (64-bit recommended)
  - macOS: macOS 10.10 (Yosemite) or higher
  - Linux: glibc 2.15 or higher, GTK+ 3.14 or higher

**Windows**
  - Go to the [ official Visual Studio Code website](https://code.visualstudio.com/)
  - Click the "Download for Windows" button to download the installer.
  - Run the downloaded file (usually named VSCodeUserSetup-{version}.exe).
  - Follow the installation wizard instructions.
  - Click "Install" and wait for the process to complete.
  - After installation, click "Finish" to open Visual Studio Code.

**macOS**
  - Go to the [ official Visual Studio Code website](https://code.visualstudio.com/)
  - Click the "Download for macOS" button to download the installer.
  - Open the downloaded .zip file and drag Visual Studio Code to the Applications folder.
  - Open Visual Studio Code from the Applications folder.

**Linux**
***Ubuntu and Debian***
  - Go to the [ official Visual Studio Code website](https://code.visualstudio.com/)
  - Click the "Download .deb" button to download the installer.
  - Open the terminal and navigate to the directory where the .deb file was downloaded.
  - Run the following command to install the package:
    `sudo apt install ./code_{version}.deb`

## Install dependencies:
`npm install`

## Steps to Configure the Database
After installing the dependencies, open the terminal and enter the MySQL client with the following command:
`mysql -u root -p`

Once in the MySQL client, create a new database:
`CREATE DATABASE ecommerce;`

### Configure Database Credentials:
Create a .env file in the root of the project and add the following environment variables, adjusting as necessary:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=produtos

## Run the Migrations:
`npx sequelize-cli db:migrate`

# Run the Project: 
* Navigate to the server folder: 
`cd petshop-doguito/server/`

* Run the project from the terminal:
`node index.js`

* Access the main route in the browser:
http://localhost:3000/produtos

# Author

 [Flaviane Nascimento](https://github.com/fl0101/) :rocket:

 "Know thyself"
 
# Contact
 [![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkdin.com/in/flaviane-nascimento-69375816a)](https://www.linkdin.com/in/flaviane-nascimento-69375816a)
 [![X Badge](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/flaviane80639)
 [![Email Badge](https://img.shields.io/badge/proton%20mail-6D4AFF?style=for-the-badge&logo=protonmail&logoColor=white)](mailto:fl0101@protonmail.com)

# Contributions

Contributions are always welcome! To contribute, always remember to test new classes and functions with proper documentation.

# License
This project is licensed under the MIT License.
