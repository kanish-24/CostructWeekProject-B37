# TutorialsNinja- Forgot Password

## Brief Description of the Demo E-commerce Website:
AUT - https://tutorialsninja.com/demo/
The provided link leads to a demo version of OpenCart, an open-source e-commerce platform that allows users to set up an online store and manage their products, customers, orders, and more. The demo website showcases the standard features of OpenCart and gives an overview of how a typical online store built with OpenCart would function.

## Introduction
To build a cypress script that automates the following process in the given URL.

## Pre-requisites
Students should have a basic understanding of:
- Javascript  programming
- HTML elements (like id, class, name, etc.)


## Project Type
Automation Testing

## Deplolyed Software
Cypress Automation Tool

## Directory Structure
Cypress/
Integration/
Construct week Project/
├─ ChangePassword.js/
├─ Register&Login.js/
├─ TutorialsNinja2.js/
├─ TutorialsNinja.js/ 
│  ├─ ...

Cypress/
Integration/
framework/
├─ Pagetest.js/
├─ Pagetest2.js/
│  ├─ ...

Cypress/
Support/
PageObjectModel/
TutorialsNinja/
├─ forgotPassword.js/
├─ login.js/
Tutorialsninja2ndApproach/
├─ AddtoCart.js/
├─ Addtowishlist.js/
├─ Login.js/
├─ LoginAgain.js/
├─ Logout.js/
│  ├─ ...

## Video Walkthrough of the project
Attach a very short video walkthough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthough of codebase [ 1 - 5 minutes ]

## Features
List out the key features of your testing

- Feature 1 - Using Page object model to run the test cases
- Feature 2 - Using cypress - frontend automation testing tool
 

## design decisions or assumptions
List your design desissions & assumptions

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

commands to install cypress using Visual studio code
npm -i init - to initialize the node package manager
npm install cypress --save-dev - to actually installing the cypress
npx cypress open -to configure the Cypress.config.js file
```

## Usage

My Automation testing Project can be used to fix the bugs in forgot password functionality
# Example
I write test case for logging in to the application by entering the email-id and clicking on forgot password
to reset my password, but I found bug afyer giving a valid email-id, I am not getting any mail for resetting the password,
This issue has to be fixed on priority basis.

when forgot password is not funtioning correctly then, I write test cases for other functionalities like add to cart,add to wishlist,clicking on checkout button, so these test cases can be used to fix the bug in these functionalities
```
Include screenshots as necessary.

## Credentials
Login credentials -

After changing the password-
email id - chaddhakanishk@gmail.com
Password - kanish24

## Framework details to implement : 
Use Page object model to define Page objects, to write tests and Read the values from a property file(Like URL) , use Waits wherever necessary , Use Assertions to validate , take screenshots wherever mentioned.Push the Project to a new Github Repository. 

## Technology Stack
List and provide a brief overview of the technologies used in the project

- Programming Language: Javascript 
- Tool : VSCode .
- Web Browser: Chrome or Default browser(electron).
- IDE/Text Editor:VSCode.
