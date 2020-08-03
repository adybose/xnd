# xnd

XND is a PayID enabled non-custodial wallet that can perform cross-chain transactions.

Just specify the PayID of the recipient, and XND will transfer the amount using the current exchange rate.

![XND](https://github.com/adbose/xnd/blob/share/xnd_demo_screen.jpg)

## Requirements

Make sure you have **node** (version `14.5.0`) installed in your computer for this project. You can use **NVM** to install a specific version of node.js. ([Read here](https://github.com/nvm-sh/nvm#usage))

You would also need **Yarn** as a package manager, which you can install by simply typing `npm install yarn` from the terminal.

## Usage

To run the development server locally, follow the steps below:

- Clone the repository into your machine and enter the `wallet` directory.

- Install the latest packages by simply running `yarn` from the directory.

- Start the application by running `yarn start`.

- Access the application from your browser at localhost:3000

To run a local Github OAuth server, check out the instructions [here](https://github.com/adbose/xnd/tree/master/oauth).

Visit [xnd.money](https://xnd.money) on Google Chrome to give it a try.

_(Note: This project needs the Disable Content-Security-Policy Chrome [extension](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related?hl=en) installed for the site to load. (See image below:)_

![Disable Contrent-Security-Policy Chrome Extension](https://github.com/adbose/xnd/blob/share/disable_content_security_policy.png)
