# Playwright
This app is for Smoke Tests Automation, written in OOP style by implementing PageObject development pattern.
![alt text](https://github.com/PlatonZvonkov/PlaywrightSmokeAutotests/blob/live/PageObject.drawio%20(2).png)

Check latest runs and report here:
https://github.com/PlatonZvonkov/PlaywrightSmokeAutotests/actions/runs/16148990265

To run and view tests locally in real time, you need to:

  -  Clone the repo to your local machine

  -  Add a line to the .env file: ADMIN_PASSWORD with the value of your user password

  -  Change the login to your email in the appsettings.{env}.json file

  -  Also update the expoKey, expoId, and venue name in the same config file to desired values (from your Expo projects)

    Run the following commands:

        npm ci (if you don't have a package manager installed)

        npx playwright install --with-deps

        npm install dotenv --save

There are 4 options for running the tests:

    npx playwright test – to run tests in the background

    npx playwright test --ui – to launch UI mode for running individual tests and observing behavior

    npx playwright test --headed – to view tests running in browsers in real time

    npx playwright show-report – to view the report from the last test run (both successful and failed tests)

Manual test run is available here:
https://github.com/PlatonZvonkov/testio/actions/workflows/playwright-live.yml

Framework documentation:
https://playwright.dev/

