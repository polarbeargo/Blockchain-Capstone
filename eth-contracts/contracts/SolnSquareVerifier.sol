pragma solidity >=0.4.21 <0.6.0;
import "./ERC721Mintable.sol";
import "./BN256G2.sol";

// define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {
    // define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    BN256G2 verifierContract;
    // define a solutions struct that can hold an index & an address
    struct Solution {
        address to;
        uint256 tokenId;
    }
    // define an array of the above struct
    Solution[] solutions;
    // define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) uniqueSolutions;

    // Create an event to emit when a solution is added
    event AddSolution(address to, uint256 tokenId);

    // Create a function to add the solutions to the array and emit the event
    function addSolution(
        address to,
        uint256 tokenId,
        bytes32 key
    ) public {
        Solutions memory solution = Solutions({tokenId: tokenId, to: to});
        solutions.push(solution);
        uniqueSolutions[key] = solution;

        emit AddSolution(to, tokenId);
    }

    function verifyTx(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public returns (bool r) {}

    // Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNewNFT(
        uint256 a,
        uint256 b,
        uint256 c,
        uint256 input,
        address to,
        uint256 tokenId
    ) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(uniqueSolutions[key].to == address(0));
        require(verifierContract.verifyTx(a, b, c, input));
        addSolution(to, tokenId, key);
        super._mint(to, tokenId);
    }
}
