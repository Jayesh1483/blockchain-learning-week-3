# **Exercise 20: DApp Conceptualization** 

### **Problem Statement:** 
Based on your enhanced ERC-20 token, conceptualize a decentralized banking platform. Users should be able to:
 1. Deposit traditional ERC-20 tokens and get an equivalent amount of "AdvancedToken" in return.
2. Lend their "AdvancedToken" to earn interest.
3. Borrow against their "AdvancedToken" holdings.

Sketch out the primary smart contracts needed, their primary functions, and how they interact, code is not needed, just provide a HLD.

### **Summary:** 
The proposed decentralized banking platform will comprise multiple smart contracts. The first contract will facilitates the conversion of traditional ERC-20 tokens to the platform's native "AdvancedToken" and back. Then a Lending contract will be initiated to manages lending and borrowing activities, allowing users to lend their "AdvancedToken" and borrow against it with interest. The Interest contract will calculate and manage interest rates for lenders and borrowers based on market conditions. The TokenRegistry contract will oversee token holdings and balances of each user, while the Governance contract ensures stable operations by allowing authorized entities to adjust interest rates and collateral requirements. Together, these contracts establish a secure and transparent ecosystem, offering token swapping, lending, borrowing, and robust interest rate management for all participants.

1. **Contract to Swap traditional token to Advance token:**
   - **Functionality:** This contract will facilitates the conversion of input traditional ERC-20 tokens to output "AdvancedToken" and vice versa.
   - **Key Functions:**
     - `deposit`: Allows users to deposit traditional ERC-20 tokens and receive an equivalent amount of "AdvancedToken" in return.
     - `withdraw`: Enables users to convert their "AdvancedToken" back to traditional ERC-20 tokens.

2. **Lending Contract:**
   - **Functionality:** Manages the lending and borrowing functionalities of the platform.
   - **Key Functions:**
     - `lendTokens`: Allows users to lend their "AdvancedToken" to the pool and earn interest.
     - `borrowTokens`: Permits users to borrow against their "AdvancedToken" holdings, with interest and collateral management.
     - `Loanpayment`: Enables users to repay their outstanding loans with interest.

3. **Interest Contract:**
   - **Functionality:** Calculates and manages the interest rates for both lenders and borrowers.
   - **Key Functions:**
     - `LendingInterest`: Computes the interest to be paid to lenders based on the lending pool's performance and market conditions.
     - `BorrowingInterest`: Calculates the interest to be paid by borrowers based on their borrowing history and market rates.

4. **TokenRegistry Contract:**
   - **Functionality:** Manages the token holdings and balances for each user in the platform.
   - **Key Functions:**
     - `getTokenBalance`: Retrieves the "AdvancedToken" balance of a specific user.
     - `updateTokenBalance`: Updates the "AdvancedToken" balance of a user after each transaction.

5. **Governance Contract:**
   - **Functionality:** Handles the governance-related operations and decisions within the platform.
   - **Key Functions:**
     - `modifyInterestRates`: Allows authorized entities to modify the interest rates for lending and borrowing.
     - `manageCollateralReq`: Permits authorized entities to adjust the collateral requirements for borrowers.

