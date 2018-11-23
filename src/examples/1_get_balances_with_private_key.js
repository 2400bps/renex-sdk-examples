/**
 * Example 1: Getting the balances from private key account
 * 
 * This will set up a RenExSDK instance and get the balances.
 */

const { RenExSDK } = require("@renex/renex");
const Web3 = require("web3");

const ProviderEngine = require("./0_setup_provider_with_private_key");

async function main() {
    ProviderEngine.start();
    var web3 = new Web3(ProviderEngine);
    var accounts = await web3.eth.getAccounts();
    var mainAccount = accounts[0];
    console.log(`Getting balances for: ${mainAccount}`);

    var sdk = new RenExSDK(ProviderEngine, { network: "testnet", autoNormalizeOrders: true, storageProvider: "memory" });
    sdk.setAddress(mainAccount);
    const balances = await sdk.fetchBalances(["ETH"]);

    console.log(`Ethereum balance: ${JSON.stringify(balances.get("ETH"))}`);

    ProviderEngine.stop();
}

main();
