# xnd

XND is a cryptocurrency wallet with native integration of PayID, that allows cross-chain transactions.

Users can send any currency to a PayID, and XND will ensure that the amount is recieved in the currency of the address linked to the PayID. XND is non-custodial, so users are always in control of their private keys.

The project is live at [xnd.money](https://xnd.money). You need to disable Content Security Policy to use XND (see Security Note below). This is a hackathon-grade software. Do **NOT** use it on mainnet.

![XND](https://github.com/adbose/xnd/blob/share/xnd_demo_screen.jpg)

### Components

- XND Wallet frontend
- OAuth server
- Backend (with swap engine, countervalue API, etc)

### Security Note

On production, you need to disable **Content Security Policy** to allow the wallet to execute Javascript in Ripple SDKs. This is only a temporary measure.

The easiest way to do this is install [this Chrome extension](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden/related?hl=en), and disable CSP when visiting [xnd.money](https://xnd.money).

![Disable Contrent-Security-Policy Chrome Extension](https://github.com/adbose/xnd/blob/share/disable_content_security_policy.png)


### Requirements

- Node v14.5.0+. You can use [nvm](https://github.com/nvm-sh/nvm#usage) to manage Node versions.
- `yarn` package manager. You can install it with `npm install -g yarn`
- GitHub OAuth credentials. Contact the developers for more information.
- Python 3.8

## Usage

- Running the wallet frontend on `localhost:3000`.

  ```sh
  git clone https://github.com/adbose/xnd
  cd wallet
  yarn
  yarn start
  ```
  
- Running the OAuth server. See instructions [here](https://github.com/adbose/xnd/tree/master/oauth).

- Running the XND backend.

  ```sh
  cd backend
  pipenv install
  pipenv run server
  ```
