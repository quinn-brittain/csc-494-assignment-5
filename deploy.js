const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('./compile');
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
            data: bytecode,
            arguments: [100, web3.utils.toWei("0.001", "ether")]
        })
        .send({
            from: accounts[1],
            gas: 3000000
        });
    console.log('Contract deployed to', contract.options.address);

    provider.engine.stop();
};
deploy();