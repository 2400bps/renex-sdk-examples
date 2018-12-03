/**
 * Example 2: Getting the balances
 * 
 * This will set up a RenExSDK instance and get the balances.
 */

const { RenExSDK } = require("@renex/renex");
const Web3 = require("web3");

// We're going to use the provider object from Example 0
const provider = require("./0_setup_provider_with_mnemonic");
// If using the private key, use the providerEngine object from Example 1

async function main() {
    // Pass in the provider object to RenExSDK
    // If using the providerEngine from Example 1, pass the providerEngine to RenExSDK instead
    var sdk = new RenExSDK(provider, { network: "testnet", autoNormalizeOrders: true });
    var web3 = new Web3(provider);
    var accounts = await web3.eth.getAccounts();
    // Set the account to use with the RenEx SDK
    var mainAccount = accounts[0];
    sdk.setAddress(mainAccount);

    console.log(`Getting balances for: ${mainAccount}`);

    const balances = await sdk.fetchBalances(["ETH"]);

    console.log(`Ethereum balance: ${JSON.stringify(balances.get("ETH"))}`);

    // Stop the provider engine when we're done
    // If using the providerEngine from Example 1, call providerEngine.stop() instead
    provider.engine.stop();
}

main().catch(function (err) {
    console.error(err);
});
