var ERC721MintableComplete = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        let token_num = 5;
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

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
            let balance = await this.contract.balanceOf(account_one);
            assert.equal(balance, 5, "Incorrect number of account_one token balance.");
            let balance2 = await this.contract.balanceOf(account_two);
            assert.equal(balance2, 0, "Incorrect number of account_two token balance.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            token_uri = await this.contract.tokenURI(1);
            assert.equal(token_uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "token uri is not found.") 
        })

        it('should transfer token from one owner to another', async function () { 
            let owner = await this.contract.ownerOf(2);
            assert.equal(owner, account_two, "token transfer fail");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            var emitted = false;
            
            this.contract.Transfer((error, result) => {
                emitted = true
            })

            assert.equal(emitted, false, 'fail when minting when address is not contract owner');
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner({from: account_one}); 
            assert.equal(owner,account_one, 'Incorrect owner account');
        })

    });
})