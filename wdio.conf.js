exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    // app queda vacío: instalamos el APK directamente en el emulador desde el workflow
    'appium:app': '',
    'appium:noReset': true
  }],
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  services: [],
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results' }]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },

  // Hook: tomar screenshot en fallo y guardarlo en allure-results
  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      const timestamp = Date.now();
      const filepath = `allure-results/failure-${timestamp}.png`;
      await driver.saveScreenshot(filepath);
    }
  }
};
