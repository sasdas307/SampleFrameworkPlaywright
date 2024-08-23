import {PlaywrightTestConfig,devices} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

if (!process.env.NODE_ENV) {
    require("dotenv").config({ path: `${__dirname}//src//config//.env` });
  } else {
    require("dotenv").config({
      path: `${__dirname}//src//config//.env.${process.env.NODE_ENV}`,
    });
  }

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    testDir: "./src/tests",
    /* Run tests in files in parallel */
    fullyParallel: true,
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
        // {
        //   name: 'chromium',
        //   use: { ...devices['Desktop Chrome'] },
        // },
         // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },

        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },

        // /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        // /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        {
            name: "Google Chrome",
            use: { ...devices["Desktop Chrome"], channel: "chrome" },
        },
    ]
};

export default config;