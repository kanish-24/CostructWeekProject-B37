const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config){
  // implement node event listeners here
  
  return config;
}
module.exports = defineConfig({

  //reporter: 'cypress-mochawesome-reporter',
  video : true,
  e2e: {
    setupNodeEvents,
    // specifying path/ what i want to execute to cypress
  
    //specPattern: 'cypress/Integration/Construct-week-Project/*.js',

    specPattern: 'cypress/Integration/framework/*.js',
   

  },
});
