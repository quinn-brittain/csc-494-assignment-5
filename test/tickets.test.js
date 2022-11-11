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
            data: bytecode,
            arguments: [10, 100]
        })
        .send({
            from: accounts[0],
            gas: "10000000",
            gasPrice: "10000000000000"
        });
});

describe("Tickets", () => {
    it("Contract deployment", () => {
        assert.ok(contract.options.address);
    });
    it("Buying a ticket", async () => {
        await contract.methods.buyTicket(0).send({
            from: accounts[0],
            value: 100,
            arguments: [0]
        });
        const tickets = await contract.methods.getTickets().call({
            from: accounts[0],
        });
        assert.equal(accounts[0], ticket[0]);
    });
    it("Ether requirement", async () => {
        try {
            await contract.methods.buyTicket().send({
                from: accounts[0],
                value: 0,
                arguments: [0]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });
    it("Single ticket requirement", async () => {
        try {
            await contract.methods.buyTicket().send({
                from: accounts[0],
                value: 100,
                arguments: [0]
            });
            await contract.methods.buyTicket().send({
                from: accounts[0],
                value: 100,
                arguments: [1]
            });
            assert(false);
        } catch (err) {
            assert(err);
        }
    });
    it("Get ticket of address", async () => {
        await contract.methods.buyTicket().send({
            from: accounts[0],
            value: 100,
            arguments: [0]
        });
        const ticketID = await contract.methods.getTicketOf.send({
            from: accounts[0],
            arguments: [accounts[0]]
        })
        assert.equal(0, ticketID);
    });
    it("Swap tickets", async () => {
        await contract.methods.buyTicket().send({
            from: accounts[0],
            value: 100,
            arguments: [0]
        });
        await contract.methods.buyTicket().send({
            from: accounts[1],
            value: 100,
            arguments: [1]
        });
        await contract.methods.offerSwap().send({
            from: accounts[0],
            value: 100,
            arguments: [accounts[1]]
        });
        await contract.methods.acceptSwap().send({
            from: accounts[1],
            value: 100,
            arguments: [accounts[0]]
        });
        const tickets = await contract.methods.getTickets().call({
            from: accounts[0],
        });
        assert.equal(accounts[0], ticket[1]);
        assert.equal(accounts[1], ticket[0]);
    });
});