// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts@4.7.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.7.3/access/Ownable.sol";
import "@openzeppelin/contracts@4.7.3/utils/Counters.sol";

contract MyToken is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyToken", "MTK") {
        _tokenIdCounter.increment();
    }

    function _baseURI() internal pure override returns (string memory json_File) {
        return json_File;
    }

    function safeMint(address senderAd, address receiverAd, string memory json_file) public onlyOwner {
        string memory json_File = json_file;
       uint256 tokenId =_tokenIdCounter.current();
       _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _transfer(senderAd, receiverAd, tokenId);
    }
}
