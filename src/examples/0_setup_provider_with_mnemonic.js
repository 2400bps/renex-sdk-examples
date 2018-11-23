/**
 * Example 0: Setting up a provider with a mnemonic seed phrase.
 * 
 * This will set up a provider with a mnemonic seed phrase
 * The provider can be used to setup the RenExSDK.
 */

var HDWalletProvider = require("truffle-hdwallet-provider");

const infuraUrl = `https://kovan.infura.io/${process.env.INFURA_KEY}`;
const mnemonic = process.env.MNEMONIC;

// This is the provider to pass when instantiating RenExSDK
// i.e. var sdk = new RenExSDK(provider);
// This provider's engine starts automatically
const provider = new HDWalletProvider(mnemonic, infuraUrl);

if (require.main === module) {
    console.log(`Provider was set up with public addresses: ${JSON.stringify(provider.addresses)}`);
    // Stop the provider engine when we're done with the provider
    provider.engine.stop();
}

// Export the provider so other demos can use it
module.exports = provider;
