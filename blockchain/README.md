# DigiShares Blockchain Code

## Note
1. The `start-ganache` command is made so it saves the state of your blockchain, in the ./ganache folder. At the same time, it will always seed the accounts with the same phrase. And will start the instance on port 7545. For more info on how to customize these options check: https://docs.nethereum.com/en/latest/ethereum-and-clients/ganache-cli/
2. `reset-deployed-contracts` will reset your local blockchain to the state defined in the migrations

## Install

1. install project dependencies by running: `npm install`
2. Ensure you have installed Rust and Cargo: [Install Rust](https://www.rust-lang.org/tools/install)
3. Install Foundry:
   `cargo install --git https://github.com/gakonst/foundry --bin forge --locked foundry-cli`
4. Install dependency contracts:
   `git submodule update --init --recursive`
5. Run tests:
   `run the 'test contracts' script from the package.json`

## Deploying the Smart Contracts
1. Create a migration file in the migrations folder
2. instruct the deployer to deploy your contract
3. start your ganache instance by running `start-ganache`
4. run the `deploy-contracts` script. NOTE: this will reset the state of your local blockchain, so make sure the deployer is settings some initial info that you might need

## Testing the Smart Contracts
1. Create a new .t.sol file in the tests folder
2. Write your tests
3. Run `test-contracts` script
4. NOTE: the testing framework is Foundry, more documentation for it can be found here https://book.getfoundry.sh/index.html

## Linking MetaMask to the local blockchain
1. Go to MetaMask and add new network
   1. Network Name: Localhost 7545
   2. RPC URL: http://localhost:7545
   3. Chain ID: 1337
   4. Currency Symbol: ETH
2. Add new Account
   1. Import Account
   2. type: private key
   3. Copy one of the private keys from the console, when you run the `start-ganache` script. NOTE: you might wanna keep account[0] as the migration only account and use account[1] for your web interactions.
   4. Paste in MetaMask
3. Add the tokens
   1. Check the terminal that deployed your tokens
   2. Copy the smart contract address
   3. In metamask, click on 'import token'
   4. Paste the contract address
   5. Now you should be able to see the balances in those accounts

## Linking the Smart Contracts to the Frontend
1. Make sure the frontend's .env variable points to the right place for your ganache-cli instance
2. Start the ganache-cli instance by running `start-ganache` script
3. Link one of the wallets generated by ganache to your metamask, by copying the private key from the console
4. Run the frontend project as per usual
