const { assert } = require('chai');
const { artifacts } = require('hardhat');

const AdvancedToken = artifacts.require('Advancedtoken');

contract('AdvancedToken', (accounts) => {
  let advancedToken;

  beforeEach(async () => {
    advancedToken = await AdvancedToken.new('Test Token', 'TT', 10000);
  });

  it('should mint tokens correctly and reflect in the balance', async () => {
    const initialBalance = await advancedToken.balanceOf(accounts[0]);
    const amount = 1000;
    await advancedToken.mint(accounts[1], amount);
    const finalBalance = await advancedToken.balanceOf(accounts[1]);
    assert.equal(
      finalBalance.toNumber(),
      amount,
      'Tokens were not minted correctly or reflected in the balance'
    );
  });

  it('should not mint tokens beyond the maximum supply', async () => {
    try {
      const maxSupply = 10000;
      const initialSupply = await advancedToken.totalSupply();
      const amount = maxSupply - initialSupply + 1;
      await advancedToken.mint(accounts[1], amount);
      assert.fail('should have thrown an error');
    } catch (error) {
      assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
    }
  });

  it('should allow users to burn their tokens and reflect the reduced total supply', async () => {
    const initialBalance = await advancedToken.balanceOf(accounts[0]);
    const amount = 500;
    await advancedToken.burn(amount, { from: accounts[0] });
    const finalBalance = await advancedToken.balanceOf(accounts[0]);
    assert.equal(
      finalBalance.toNumber(),
      initialBalance.toNumber() - amount,
      'Tokens were not burned correctly or did not reflect the reduced total supply'
    );
  });

  it('should lock and unlock tokens correctly', async () => {
    const amount = 200;
    await advancedToken.lockTokens(accounts[1], amount);
    const lockedBalance = await advancedToken.balanceOf(accounts[1]);
    assert.equal(lockedBalance.toNumber(), 0, 'Tokens were not locked correctly');

    await advancedToken.unlockTokens(accounts[1]);
    const unlockedBalance = await advancedToken.balanceOf(accounts[1]);
    assert.equal(unlockedBalance.toNumber(), amount, 'Tokens were not unlocked correctly');
  });

  it('should not allow the transfer of locked tokens', async () => {
    const amount = 200;
    await advancedToken.lockTokens(accounts[1], amount);

    try {
      await advancedToken.transfer(accounts[2], amount, { from: accounts[1] });
      assert.fail('should have thrown an error');
    } catch (error) {
      assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
    }
  });
});
