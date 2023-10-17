## Identifying Potential Reasons for the Bug:
The burn function is not checking if the tokens are locked before allowing the burning operation. There is no check on whether the tokens are locked in the burn function, allowing users to burn tokens even if they are locked.

## Writing a Unit Test in Hardhat:
The test.js file has been attached to deubg the errors in the code. 

```it("Should not allow burning of locked tokens", async function() {
    const [owner, user] = await ethers.getSigners();
    const AdvancedToken = await ethers.getContractFactory("AdvancedToken");
    const advancedToken = await AdvancedToken.deploy();
    await advancedToken.lockTokens(user.address, 1000); // Lock the tokens for the user
    await expect(advancedToken.connect(user).burn(500)).to.be.revertedWith("Tokens are locked");
});
```

## Debugging and Fixing the Issue in the "AdvancedToken" Contract:
To fix the issue, we need to add a check in the burn function to ensure that tokens cannot be burned if they are locked. Modify the burn function and updated it in the debug.sol script

```function burn(uint256 _amount) public {
    require(lockedUntil[msg.sender] < block.timestamp, "Tokens are locked");
    require(balances[msg.sender] >= _amount, "Not enough tokens");        
    balances[msg.sender] -= _amount;
    totalSupply -= _amount;

    emit Transfer(msg.sender, address(0), _amount);
}
```
## Documenting the Debugging Steps and Solution:
To debug the issue, we identified that the burn function was not checking for locked tokens. We created a test file that simulated the scenario. After identifying the issue, we added a check in the burn function to ensure that tokens cannot be burned if they are locked. Finally, we re-ran the test file to ensure that the fix was effective.

