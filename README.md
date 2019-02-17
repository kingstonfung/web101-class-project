# Web Development Workshop 101
## For U of A iGeek Student Group, February 23 - 24
For the finished website, please see https://kingstontest1.z19.web.core.windows.net

## Deploying:
1. For simplicity, please copy the following files & folders to the `deployable` directory:
```
/images
/scripts
/styles
about.html
contact.html
favicon.ico
index.html
jobs.html
```
2. And then use Azure Tools within VSCode to push the `deployable` folder to Azure Static Website
+ For more information please see https://code.visualstudio.com/tutorials/static-website/getting-started

## Running Integration Tests:
1. Please ensure you have node environment setup (https://nodejs.org/en/download/)
2. Install JS dependencies
```
npm install
```
3. Run Cypress to start testing
```
npm run cypress
```
4. Explore the `/cypress/integration/` folder to see example tests written for this website.