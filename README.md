﻿# playwright_js

Step 1: Create a fresh new folder (Ex: Playwright Framework)

Step 2: Open Directory in Visual Studio Code. From VS code,

Click on File > Open Folder > Choose newly Created Folder( Playwright Framework)

Step 3: From the VS Code, Click on Terminal Menu > Click on New Terminal

Step 4: Enter the below command to start the Playwright installation

      npm init playwright@latest
      
The above command does the following operation:

  1- Creates Package.json
  2- Installs npm library 
  3- Sets up basic Files and Folders
  4- tests folder: This folder contains actual test scripts. By default, an example.spec.ts file will be created inside this folder. 
  5- .gitignore: This file helps if you are using git repository 
  6- package.json and package-lock.json: This file helps to track dependencies, create a shortcut for running tests, etc. 
  7- playwright.config.ts: This is the global configuration file for the Playwright, which you can configure with available options.

Step 5: Install Browsers

However, Playwright is configured to run on existing browsers, which might create issues while running tests, so it is recommended to use the Playwright browsers. Using the below command, you can install all different browsers in Playwright.

        npx playwright install
The above command installs the Playwright version of Chromium, Firefox, and Webkit browser.

Step 6: Create the first Playwright test

Navigate inside the tests folder and create a test spec file ex: demo.spec.js

Let’s start a test case with the below scenario

Scenario:

Navigate to https://www.browserstack.com/
Click on Sign In
Enter wrong credentials
Verify Error Message is displayed or not.
Step 7: Execute Playwright Test Script

   npx playwright test  demo.spec.js –headed
   
 Step 8: View the report

   npx playwright show-report  
   
   
   
   
   
   
   
   

