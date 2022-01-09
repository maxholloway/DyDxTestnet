# DyDx Faucet

## Idea: simple website that allows people to get DyDx's USDC put into their account.

## User journey:
    * go to site
    * generate a testnet private eth key
    * generate API credentials in the front-end, and receive the API credentials as a response
    * create an in-browser client with DyDx that requests USDC via the faucet
    * tell the user when the USDC shows up in the account

## Architecture
    * nodejs app that serves mustache-templated html
    * 