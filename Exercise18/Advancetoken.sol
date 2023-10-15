// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract AdvancedToken is ERC20, Ownable {
    uint private constant _TIMELOCK_PERIOD = 30 days; // Change this value to set the duration of the timelock
    uint private _maxSupply;
    mapping(address => uint) private _lockedBalances;

    event TokensLocked(address indexed user, uint amount, uint releaseTime);
    event TokensUnlocked(address indexed user, uint amount);

    constructor(string memory name_, string memory symbol_, uint maxSupply_) ERC20(name_, symbol_) Ownable(msg.sender) {
        _maxSupply = maxSupply_;
    }

    function mint(address to, uint amount) public onlyOwner {
        require(totalSupply() + amount <= _maxSupply, "Max supply exceeded");
        _mint(to, amount);
    }

    function burn(uint amount) public {
        _burn(msg.sender, amount);
    }

    function lockTokens(address user, uint amount) public onlyOwner {
        require(balanceOf(user) >= amount, "Insufficient balance");
        _lockedBalances[user] += amount;
        emit TokensLocked(user, amount, block.timestamp + _TIMELOCK_PERIOD);
    }

    function unlockTokens(address user) public onlyOwner {
        require(_lockedBalances[user] > 0, "No tokens locked");
        uint amount = _lockedBalances[user];
        _lockedBalances[user] = 0;
        emit TokensUnlocked(user, amount);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(_lockedBalances[msg.sender] <= block.timestamp, "Tokens are locked");
        require(_lockedBalances[recipient] <= block.timestamp, "Recipient's tokens are locked");
        return super.transfer(recipient, amount);
    }
}