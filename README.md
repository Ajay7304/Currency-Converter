# Currency-Converter

Method 1: Using the provided EXE file (Recommended)

-Go to the GitHub repository and locate the "Download" section.
-Download the provided "Currency-converter.exe" file.
-Double-click on the downloaded EXE file to launch the Electron application.

Method 2: Setting up the Electron app manually

-Install Visual Studio Code (VS Code) on your computer if you haven't already.
-Install Node.js:
-Create a new Electron app folder:
Open VS Code.
Click on "File" > "New Folder" and give it a name (e.g., "MyElectronApp").

-Initialize the project: "npm init"
-Install dependencies electron and axios: "npm install electron axios"
-Open this folder in VS Code.
-Create four essential files inside your app folder:
Right-click on your folder in VS Code and select "New File."
-Create these files: index.html, main.js, preload.js, and renderer.js.
-Copy and paste the code provided in each of these files from the GitHub repository.

-Launch your Electron app: "electron main.js"
