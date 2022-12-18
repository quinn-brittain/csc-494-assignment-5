import web3 from "./web3";
const address = '0x4c16186cae04aA722b2fce59B88A4d5E1000B361';
const abi = [
    {
        inputs: [[Object], [Object]],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        inputs: [[Object]],
        name: 'acceptSwap',
        outputs: [[Object], [Object]],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'buyTicket',
        outputs: [[Object], [Object], [Object]],
        stateMutability: 'payable',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getNumTickets',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getOwner',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getPrice',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'getTicketOf',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'getTicketOwner',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [],
        name: 'getTickets',
        outputs: [[Object]],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'offerSwap',
        outputs: [[Object], [Object]],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'setNumTickets',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'setOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'setPrice',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object], [Object]],
        name: 'setTicketOf',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object], [Object]],
        name: 'setTicketOwner',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [[Object]],
        name: 'setTickets',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    }
];
let tickets = new web3.eth.Contract(abi, address)
tickets.defaultChain = 'goerli'
export default tickets;