pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EggToken is ERC20, Ownable {
    constructor(uint256 initialSupply) public ERC20("Goose Golden Egg", "EGG") {
        _mint(msg.sender, initialSupply);
    }

    function mint(address _to, uint256 _amount) public onlyOwner{
        _mint(_to, _amount);
    }
}