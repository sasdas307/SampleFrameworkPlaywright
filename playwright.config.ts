import {PlaywrightTestConfig,devices} from '@playwright/test';

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    use: {
        baseURL: "https://www.saucedemo.com",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 2,
    retries: 0,
    reporter: 'html',
    /* reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "always"
    }]], */
    projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        }
    ]
};

export default config;