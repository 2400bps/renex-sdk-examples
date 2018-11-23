/**
 * Example 0: Setting up a provider with a raw Private Key.
 * 
 * This will set up a provider with a private key.
 * The provider can be used to setup the RenExSDK.
 */

const ProviderEngine = require("web3-provider-engine");
const WalletSubprovider = require("ethereumjs-wallet/provider-engine");
const Wallet = require("ethereumjs-wallet");
const RpcSubprovider = require('web3-provider-engine/subproviders/rpc');


// Setup the Wallet object
const privateKey = process.env.PRIVATE_KEY;
const ethjswallet = Wallet.fromPrivateKey(Buffer.from(privateKey, "hex"));

// Setup the provider engine to talk to Infura
const infuraUrl = `https://kovan.infura.io/${process.env.INFURA_KEY}`;
const providerEngine = new ProviderEngine();
providerEngine.addProvider(new WalletSubprovider(ethjswallet));
providerEngine.addProvider(new RpcSubprovider({
    rpcUrl: infuraUrl,
}));

if (require.main === module) {
    console.log(`Provider was set up with public address: ${ethjswallet.getAddress().toString("hex")}`);
}

// Export the engine so other demos can use it
module.exports = providerEngine;
