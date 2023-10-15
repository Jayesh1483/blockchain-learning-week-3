it("Should not allow burning of locked tokens", async function() {
    const [owner, user] = await ethers.getSigners();
    const AdvancedToken = await ethers.getContractFactory("AdvancedToken");
    const advancedToken = await AdvancedToken.deploy();
    await advancedToken.lockTokens(user.address, 1000); // Lock the tokens for the user
    await expect(advancedToken.connect(user).burn(500)).to.be.revertedWith("Tokens are locked");
});
