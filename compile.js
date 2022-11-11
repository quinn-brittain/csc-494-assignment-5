const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'Tickets.sol');
const source = fs.readFileSync(contractPath, 'utf8');``

// module.exports = solc.compile(source, 1).contracts[':Tickets'];

let input = {
    language: "Solidity",
    sources: {
        "Tickets.sol": {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["abi", "evm.bytecode"],
            },
        },
    },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const contracts = output.contracts["Tickets.sol"]

for (let contractName in contracts) {
    const contract = contracts[contractName];
    console.log(contract.abi)
    console.log(contract.evm.bytecode.object)
    module.exports = {"abi":contract.abi, "bytecode":contract.evm.bytecode.object};
}
