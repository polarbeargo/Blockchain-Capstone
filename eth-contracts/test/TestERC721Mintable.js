var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    describe('match erc721 spec', function () {
        let token_num = 5;
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: accounts[0]});

            // mint multiple tokens
            for(i = 1; i < token_num; i++) {
                await this.contract.mint(accounts[i], i, {from: accounts[0]});
            }
        })

        it('should return total supply', async function () { 
            let res = await this.contract.totalSupply();
            assert.equal(res, 4, "Incorrect total suppl.");
            
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(accounts[1], {from: accounts[0]});
            assert.equal(balance, 1, "Incorrect number of account_one token balance.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            token_uri = await this.contract.tokenURI(1);
            assert.equal(token_uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "token uri is not found.") 
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 1;
            await this.contract.approve(accounts[2], tokenId, {from: accounts[1]});
            await this.contract.transferFrom(accounts[1], accounts[2], tokenId, {from: accounts[1]}); 
            let tokenOwner = await this.contract.ownerOf.call(tokenId);
            assert.equal(tokenOwner, accounts[2], 'token transfer fail')
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: accounts[0]});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            var emitted = false;
            
            this.contract.Transfer((error, result) => {
                emitted = true
            })

            assert.equal(emitted, false, 'fail when minting when address is not contract owner');
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner({from: accounts[0]}); 
            assert.equal(owner,accounts[0], 'Incorrect owner account');
        })

    });
})