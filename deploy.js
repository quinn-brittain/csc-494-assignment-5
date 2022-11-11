const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { bytecode } = require('./compile');
const provider = new HDWalletProvider(
    '', // phrase
    ''  // endpoint
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    contract = await new web3.eth.Contract(abi)
        .deploy({ 
            data: bytecode
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        });
    console.log('Contract deployed to', contract.options.address);

    provider.engine.stop();
};
deploy();
