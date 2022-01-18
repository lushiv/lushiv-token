## Lushiv Token LUT
- Smart contract
- ERC-20 token standards 
- Read more about ERC 20:[eip-20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)

## Flow :-
we make the two smart contracts :-
- First one is for the craete ERC 20 token 
- Second is for the sale our token(ICO) part.

## Tools and langues:-
- Node js
- Solidity
- Truffle framework (Testing smart contracts)
- Ganache (ganache is a local memory blockchain that we used for develoyment process )
- MetaMask



## Step 1:-
- Run Ganche on you local 
- image running ganche
- RUN `truffle init` (Create a new truffle project)

## DIr explain:-
- `contracts` this dir will handle all contracts and deploy our smart contract our blockchain and this also dir that will use in order to develop our other smart contracts will put our token contract inside this folder and our token sale contract inside here.
- The next dri `migrations` this is where all of our migrations files.Migrate and change the state files similar migarte with deployments .
- And the last one is configurations file `truffle-config.js` it all the configurations file.
- for deployment you can uncomment  this line of code :

```
 development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
```

- By creating New smart contracts on `contracts` dir
- migrate file `truffle migrate`
- ANd open truffle console
- type `LushivToken.deployed().then(function(i){token=i;})`
- and get  your address : `token.address`
- `0x8BA9F3545d89903f1DDcd8386AA40d33bE6c9B7D`
- and `token.totalSupply().then(function(s) {totalSupply = s;})`


### Confusing terms 
- `artifacts` is the basically allows us to create a contract abstraction that truffle can use to run  in js invrioment and interact with our smart contract in any javascript run time like truffle conlse with client side application
- 



### Test smart contract
- Making test file on `test` directory
- RUN `truffle test`


## Smart contract check on truffle console
- `LushivToken.deployed().then(function(instance){tokenInstance=instance;})`
- For name : `tokenInstance.name()`
- Symbol : ` tokenInstance.symbol()`
- 
