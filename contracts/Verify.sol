// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Verify {
    string private greeting;
     constructor(){

     }
     function hello(bool sayhello)public pure returns(string memory)
     {
        if(sayhello)
        {
            return "Hello";
        }
        return "";
     }
}
