const assert = require("assert");
const ganache = require("ganache");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { abi, bytecode } = require('../compile')

let accounts;
let contract;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    contract = await new web3.eth.Contract(abi)
        .deploy({
            data: bytecode
        })
        .send({
            from: accounts[0],
            gas: "10000000",
            gasPrice: "10000000000000"
        });
});

describe("Tickets", () => {
    it("Verify contract deployment", () => {
        assert.ok(contract.options.address);
    });
});