# Udacity Blockchain Capstone

At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association.

Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles.

Moreover, title fraud poses a risk to homeowners worldwide. US losses associated with title fraud reportedly averaged around $103,000 per case in 2015, compelling many property buyers to purchase title insurance.

These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

Some companies and governments around the globe have already implemented blockchain technology for the title management process.

Ghanaian blockchain company Bitland has been working on a solution for Ghana, where it is estimated that almost 80% of land is unregistered, according to Forbes. Those that possess unregistered land find it more difficult to prove legal ownership, increasing their exposure to the risk of land seizures or property theft.

Bitland is seeking to create secure digital public records of ownership on its blockchain platform, with the aim of protecting land owners from title fraud. Bitland has expanded to operate in 7 African nations, India, and is also working with Native Americans in the US.
The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product as the following:  
- Before mint a token, we need to verify we own the property. 
- We will generate a pre-knowledge proof using zokrates, zk-SNARKs to create a verification system which can prove we have title to the property without revealing that specific information on the property.
- We will be minting our own tokens to represent we title to the properties. 
- Once the token has been verified we will place it on a blockchain market place (OpenSea) for others to purchase.

## Libraries  
Truffle v5.5.7 (core: 5.5.7)  
Ganache v^7.0.3  
Solidity v0.5.16 (solc-js)  
Node v14.19.1  
Web3.js v1.5.3   

Clone this repository:

```
git clone https://github.com/polarbeargo/Blockchain-Capstone.git
```

Change directory to ```eth-contracts``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd eth-contracts
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```  
This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Starting migrations...
======================
> Network name:    'development'
> Network id:      1650065453004
> Block gas limit: 6721975 (0x6691b7)


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
✓ Transaction submitted successfully. Hash: 0x6e72f2c15bcbbab5b6b834b7894734b5cc4d2c6747636df5e33026c97be0fd73
   > transaction hash:    0x6e72f2c15bcbbab5b6b834b7894734b5cc4d2c6747636df5e33026c97be0fd73
   > Blocks: 0            Seconds: 0
   > contract address:    0x4E89f8aa1791173F5a8FfB21e390eaC6bB7427cc
   > block number:        11
   > block timestamp:     1650068096
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             99.915511
   > gas used:            1051350 (0x100ad6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.021027 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
✓ Transaction submitted successfully. Hash: 0x7e49076376cd3c5d6d1ed5885aa223b325a1b2aa51c3d13aea7e74717ba49514
   > transaction hash:    0x7e49076376cd3c5d6d1ed5885aa223b325a1b2aa51c3d13aea7e74717ba49514
   > Blocks: 0            Seconds: 0
   > contract address:    0x788D4959f9f29ef088c6F98162165778C765Fee6
   > block number:        12
   > block timestamp:     1650068097
   > account:             0x27D8D15CbC94527cAdf5eC14B69519aE23288B95
   > balance:             99.84907004
   > gas used:            3322048 (0x32b0c0)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.06644096 ETH

   ✓ Saving migration to chain.
✓ Transaction submitted successfully. Hash: 0xa1eb06d6c7cac7f45d336da19ea0f629cb663a1d52dd8053947b6e967d2c297a
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.08746796 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.08746796 ETH
``` 
### Contract Address  
- Verifier: 0x4E89f8aa1791173F5a8FfB21e390eaC6bB7427cc  
- SolnSquareVerifier: 0x788D4959f9f29ef088c6F98162165778C765Fee6  

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```  
### Migrate smart contracts to rinkeby blockchain:  
```
truffle migrate --network rinkeby
```  

```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.
WARNING: Ganache forking only supports EIP-1193-compliant providers. Legacy support for send is currently enabled, but will be removed in a future version _without_ a breaking change. To remove this warning, switch to an EIP-1193 provider. This error is probably caused by an old version of Web3's HttpProvider (or ganache < v7)


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        10557408
   > block timestamp:     1650762640
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.585076944383334
   > gas used:            226537 (0x374e9)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.000566342501812296 ETH

   -------------------------------------
   > Total cost:     0.000566342501812296 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > block number:        10557410
   > block timestamp:     1650762644
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.582244861874271336
   > gas used:            1087070 (0x10965e)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.00271767500869656 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > block number:        10557411
   > block timestamp:     1650762659
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.573751016847091032
   > gas used:            3397538 (0x33d7a2)
   > gas price:           2.500000008 gwei
   > value sent:          0 ETH
   > total cost:          0.008493845027180304 ETH

   -------------------------------------
   > Total cost:     0.011211520035876864 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.01177786253768916 ETH




Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xc53c341561f94b7438d4fbb7cd6c4bc51e409e45de37410e74819212e53d7394
   > Blocks: 3            Seconds: 49
   > contract address:    0x411fb83BF2bC5f9fee509c6E3f2d5d68F8524Ee8
   > block number:        10557417
   > block timestamp:     1650762712
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.585190212881295167
   > gas used:            226537 (0x374e9)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000226537002038833 ETH

   ✓ Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000226537002038833 ETH


2_deploy_contracts.js
=====================

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0xadf53e147c5398c46fc9f596b3a31a4463c96ac9866ef7cb4e7642dadd319ff3
   > Blocks: 1            Seconds: 9
   > contract address:    0x66A6F0b8d36307f21f50E7a30D00d5aeC1f060a8
   > block number:        10557419
   > block timestamp:     1650762742
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.584057379872232503
   > gas used:            1087070 (0x10965e)
   > gas price:           1.000000008 gwei
   > value sent:          0 ETH
   > total cost:          0.00108707000869656 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x4c8fb71376bc972c83548f18432584ac1cc761ee8b661158421e4e8d0dfb11ea
   > Blocks: 1            Seconds: 9
   > contract address:    0xF4aDAF06f97F8b5b9639f776de5A049c6b5dFE91
   > block number:        10557420
   > block timestamp:     1650762757
   > account:             0x68A5D02aB9C71892d1607B78bAB4f106BF142B21
   > balance:             0.580659853845052295
   > gas used:            3397526 (0x33d796)
   > gas price:           1.000000008 gwei
   > value sent:          0 ETH
   > total cost:          0.003397526027180208 ETH

   ✓ Saving migration to chain.
   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.004484596035876768 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.004711133037915601 ETH

```  
### Contract Transaction Hash on rinkeby blockchain:  
- Verifier: 0xadf53e147c5398c46fc9f596b3a31a4463c96ac9866ef7cb4e7642dadd319ff3  
- SolnSquareVerifier: 0x4c8fb71376bc972c83548f18432584ac1cc761ee8b661158421e4e8d0dfb11ea  
### Contract Address on rinkeby blockchain:   
- Verifier: 0x66A6F0b8d36307f21f50E7a30D00d5aeC1f060a8  
- SolnSquareVerifier: 0xF4aDAF06f97F8b5b9639f776de5A049c6b5dFE91   
[Live deployment event on Etherscan](https://rinkeby.etherscan.io/address/0xF4aDAF06f97F8b5b9639f776de5A049c6b5dFE91#events) 

## Contract Abi's
- [Verifier](https://github.com/polarbeargo/Blockchain-Capstone/blob/master/eth-contracts/build/contracts/Verifier.json)  
- [SolnSquareVerifier](https://github.com/polarbeargo/Blockchain-Capstone/blob/master/eth-contracts/build/contracts/SolnSquareVerifier.json)  
### Getting Started with Zokrates  
1. Install Docker (Docker for Desktop is fine too)
2. Run: ```docker run -v <your repo location>/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash```
3. ```cd square```
4. Compile the program written in ZoKrates DSL ```zokrates compile -i square.code```
5. Run zocrates setup ```zokrates setup```
6. Compute Witness ```zokrates compute-witness -a 3 9``` follow [knowledge hub discuss](https://knowledge.udacity.com/questions/398019)
7. Generate Proof ```zokrates generate-proof```
8. Export Verifier ```zokrates export-verifier```  
## OpenSea MarketPlace Storefront link
https://testnets.opensea.io/collection/decentralized-real-estate-marketplace-v4
# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/) 
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
