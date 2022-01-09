// Handle requirements!
var Wallet = require('ethereumjs-wallet');

console.log("Hello there, again!");

var privKeyButton = document.getElementById("generatePrivateKeyButton");
privKeyButton.addEventListener("click", generatePrivateKey);

function generatePrivateKey (evt) {
    const EthWallet = Wallet.default.generate();
    const ethAddress = EthWallet.getAddressString();
    const ethPrivKey = EthWallet.getPrivateKeyString();
    document.getElementById("ethAddressInput").value = ethAddress;
    document.getElementById("privateKeyInput").value = ethPrivKey;
}

// Generate DyDx API Credentials
const client = require('@dydxprotocol/v3-client');
// const HTTP_HOST = 'https://api.dydx.exchange';

// var apiCredsButton = document.getElementById("generateApiCredsButton");
// apiCredsButton.addEventListener("click", generateApiCredentials);

// function generateApiCredentials (evt) {
//     const ethPrivKey = document.getElementById("privateKeyInput").value;
//     console.log(`Eth private key: ${ethPrivKey}`);
// }

