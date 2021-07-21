var reporter = require('cucumber-html-reporter');
exports.config = {
  directConnect: true,
  framework: 'custom',
  //getPageTimeout: 60000,
  //allScriptsTimeout: 500000,
 // baseURL: 'http://localhost:8080/',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    'features/First.feature'
  ],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: { args: ['start-maximized'] }
  },
  cucumberOpts: {
    require: 'features/step-defniations/*.js',
   format: ['json:./cucumberreport.json'],
   
      
    
  },
  onComplete: () => {
   // var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'hierarchy',
      jsonFile: './cucumberreport.json',
      output: './cucumberreports.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
      }
      
    };
 
    reporter.generate(options);
  }
}