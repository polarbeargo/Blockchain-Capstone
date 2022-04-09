// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
let SquareVerifier = artifacts.require('BN256G2.sol');
const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

contract('Test SolnSquareVerifier', accounts => {

    describe('test verifier with proof', function () {
        beforeEach(async function () {
            this.contract = await SquareVerifier.new({from: accounts[0]});
        })

        it('verify with correct proof', async function () { 
            let verification = await this.contract.verifyTx.call();
            assert.equal(verification, true, 'Verification is invalid');
        })

        it('verify failure with incorrect proof', async function () { 
            let verification = await this.contract.verifyTx.call();
            assert.equal(verification, false, 'Verification is valid');
        })

    })
});