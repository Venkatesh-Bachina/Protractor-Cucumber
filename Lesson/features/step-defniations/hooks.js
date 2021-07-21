const {After,Status} = require('@cucumber/cucumber');
After(async function (scenario) {
    let self = this;
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (scenario.result.status === Status.FAILED) {
        
          let screenshot = await browser.takeScreenshot();
          self.attach (screenshot,'image/png')
        };
})