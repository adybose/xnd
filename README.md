# xnd

XND is a PayID enabled non-custodial wallet that can perform cross-chain transactions.

Just specify the PayID of the recipient along with the target currency, and XND will transfer the amount using the current exchange rate.

Visit [xnd.money](https://xnd.money) to give it a try.

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

## Deployment

Follow the steps below to host the application on Digital Ocean:
- Sign up on Digital Ocean, and create a **New Droplet**.
- Login via SSH into your newly created droplet by typing `ssh root@<droplet_ipv4_address>`. Make sure you have already added your SSH public key to Digital Ocean.
- Once logged in, clone the repo inside the droplet, `cd` inside wallet, and run `yarn`.
