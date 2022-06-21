# Algorand-Sandbox setup on Testnet

## Install Sandbox

Algorand provides a docker instance for setting up a node, which can be used to get started developing quickly. To install and use this instance, follow these instructions.​

```bash
git clone https://github.com/algorand/sandbox.git
cd sandbox
./sandbox up testnet
```

## Install SDK

Algorand provides an SDK for Python which is available as a pip package. To install the Python SDK, open a terminal and run the following command:​

```bash
pip3 install py-algorand-sdk
```

Follow this link for creating an account[developer.algorand.sdk](https://developer.algorand.org/docs/sdks/python/)

# Setup react app

## Available Scripts

In the project directory, you can run:

```bash
git clone https://github.com/Abel-Blue/algorand-NFTs-smartContracts.git
cd algorand-NFTs-smartContracts
npm start
```

or

```bash
git clone https://github.com/Abel-Blue/algorand-NFTs-smartContracts.git
cd algorand-NFTs-smartContracts
node server.js
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
This app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Analyzing the Bundle Size

[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

# Deployment

This app was deployed on heroku [Tenx Certificate as NFTs](https://nft-certificate-algo.herokuapp.com/)
