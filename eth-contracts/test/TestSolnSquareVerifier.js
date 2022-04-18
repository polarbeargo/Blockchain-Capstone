// Test if a new solution can be added for contract - SolnSquareVerifier
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
var proofData = require('../../zokrates/code/square/proof');
contract('Test SolnSquareVerifier', accounts => {

    describe('test solnSquareVerifier with proof', function () {
        beforeEach(async function () {
            const _verifier = await Verifier.new({from: accounts[0]});
            this.contract = await SolnSquareVerifier.new(_verifier.address, {from: accounts[0]});
        })

        it('if a new solution can be added for contract and token minted - SolnSquareVerifier', async function () { 
            let success = true;
            try {
                await this.contract.mintNewNFT(proofData.proof.a, proofData.proof.b, proofData.proof.c, proofData.inputs, accounts[1],2);
            } catch(error) {
                success = false;
            }

            assert.equal(success, true, 'Can not add solution')
        })

        it('if a repeat solution can be added for contract - SolnSquareVerifier', async function () { 
            let success = true;

            await this.contract.mintNewNFT(proofData.proof.a, proofData.proof.b, proofData.proof.c, proofData.inputs, accounts[1],2);

            try {
                await this.contract.mintNewNFT(proofData.proof.a, proofData.proof.b, proofData.proof.c, proofData.inputs, accounts[1],3);
            } catch(error) {
                success = false;
            }

            assert.equal(success, false, 'Added repeat solution')
        })
    })
})