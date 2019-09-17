if (process.env.USE_WIKI === 'true'){
    baseUrl = 'https://www.wikipedia.org'
} else if (process.env.USE_GOOGLE === 'true'){
    baseUrl = 'https://www.google.com/'
} else {
    baseUrl = 'https://www.xbox.com/en-US/'
}

exports.config = {
    runner: 'local',
    path: '/',
    specs: [
        './tests/*.js'
    ],

    suites: {

      tests: ['./tests/*.js']

    },

    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless', '--disable-gpu', '--window-size=1280,900', '--incognito'],
          }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: baseUrl,
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 1,
    services: ['selenium-standalone','chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    },
}
