## User journey.
    a. 
        1. User generates a private key (browser-side).
        2. User determines public key (browser-side).
    b. 
        1. User generates their API credentials (browser-side).
        2. User onboards (browser->DyDx).
        3. User requests USDC on DyDx (browser->DyDx).

Technologies:
    * dev requirements: npm and broswerify (for DyDx API)
    * all requirements: dydx v3-client, ethereumjs-wallet
    * NGINX web server, although that's not necessary yet
    * node-style

## Basic Site Design
* Central modal focus, keep it relatively small (can implement this later).
* User has a button that they can click to generate a private key, and then it fills into the box, with almost all stars so that it isn't displayed (stars can be implemented later).
* User clicks another button to fund the testnet wallet.

## POC Items (finished drafting at 4:52PM)
* [x] Setup basic buttons and input boxes that trigger js events
* [x] Setup npm with dependencies included
* [x] Generate private key
* [] Perform API credential calls with dydx typescript API



