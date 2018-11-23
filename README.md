# Examples for RenEx SDK

## Setup

Clone the repo and install dependencies.

```bash
git clone https://github.com/republicprotocol/renex-sdk-examples-js
cd renex-sdk-examples-js
npm install
```

Create a `.env` file in the root of the folder with the following contents:

```bash
export INFURA_KEY="your infura api key";
export PRIVATE_KEY="your wallet private key";
```

## Running the examples

Use the following format to run the examples:

```bash
npm run ex1
```

This will run example 1. `ex0` will run example 0 etc.

## List of Examples

0. [Setting up a provider using a mnemonic seed](src/examples/0_setup_provider_with_mnemonic.js)
1. [Setting up a provider using a private key](src/examples/1_setup_provider_with_private_key.js)
2. [Getting the account balances](src/examples/2_get_balances.js)

