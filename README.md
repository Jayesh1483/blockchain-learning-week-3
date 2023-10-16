# blockchain-learning-week-3

This repository contains assignments for Week 3 of the Blockchain Learning curriculum, focusing on Advance Solidity, Hardhat  Deployment, and Testing.


## Exercises:

**Exercise 17: Advanced ERC-20 Token Contract**
  - **Problem Statement:** Develop an enhanced version of the ERC-20 token named "AdvancedToken" with the following features:
    - **Timed Lock:** Implement a mechanism where the owner can lock a user's tokens for a specified duration.
    - **Mintable:** Only the contract owner can mint new tokens, up to a maximum supply limit.
    - **Burnable:** Users should be able to burn their own tokens, reducing the total supply.
    - Make use of inheritance, modifiers, events, and advanced data types in Solidity.
   - File: `Exercise17`

 **Exercise 18: Hardhat Deployment and Testing**
   - **Problem Statement:** Deploy the "AdvancedToken" contract onto the Hardhat Network and write unit tests to ensure functionalities. Tests should also ensure error scenarios are handled correctly. For instance, non-owners shouldn't be able to mint tokens.
   -  **Deployment:** Write a Hardhat script to deploy your contract.
   -   **Unit Testing:** Write tests to ensure:
        1. Tokens are minted correctly and reflected in the balance.
        2. Tokens cannot be minted beyond the maximum supply.
        3. Users can burn their tokens, reflecting the reduced total supply.
        4. Tokens can be locked and unlocked correctly.
        5. Locked tokens cannot be transferred..
   - File: `Exercise18`
  
**Exercise 19:  Debugging Scenario**
- **Problem Statement:** Users are able to burn tokens even if tokens are locked. Your task:
    1. Identify potential reasons for this bug.
    2. Write a unit test in Hardhat that simulates this error.
    3. Debug and fix the issue in the "AdvancedToken" contract.
    4. Document the debugging steps and the solution you implemented.
   - File: `Exercise19`

**Exercise 20: DApp Conceptualization**
- **Problem Statement:** Based on your enhanced ERC-20 token, conceptualize a decentralized banking platform. Users should be able to:
    1. Deposit traditional ERC-20 tokens and get an equivalent amount of "AdvancedToken" in return.
    2. Lend their "AdvancedToken" to earn interest.
    3. Borrow against their "AdvancedToken" holdings.
    4. Sketch out the primary smart contracts needed, their primary functions, and how they interact, code is not needed, just provide a HLD.
 -   File: `Exercise20`

## Test the Code:
To tests the code, you can run it in the Visual Studio Code debugger terminal and Remix IDE. All exercises would require, hardhat Open Zepplin libraries, solidity debugger and node.js extensions to be installed for Visual Studio Debugger. 
