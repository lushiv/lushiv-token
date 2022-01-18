const LushivToken = artifacts.require("LushivToken");

contract('LushivToken', function (accounts){
    it('Set the total supply upon deployment', function ()
    {
        return LushivToken.deployed().then(function (instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function (totalSupply){
        assert.equal(totalSupply.toNumber(),1000000, 'set the total supply to 10,00000');

        })
    })
})