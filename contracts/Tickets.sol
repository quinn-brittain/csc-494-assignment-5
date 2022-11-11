// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract Tickets {
    address payable private owner;
    uint256 private numTickets;
    uint256 private price;
    address[] private tickets;
    mapping (address => uint256) private ticketHolders;
    mapping (address => address) private offers;

    constructor(uint256 _numTickets, uint256 _price) {
        owner = payable(msg.sender);
        numTickets = _numTickets;
        price = _price;
    }

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    function buyTicket(uint256 ticketID) public payable returns (string memory, bool, bytes memory) {
        string memory message;
        bool success;
        bytes memory data;
        
        if (tickets[ticketID] != address(0)) {
            message = "This ticket is already taken";
        } else if (ticketHolders[msg.sender] != 0) {
            message = "You already own a ticket";
        } else {
            require(msg.value >= price);
            owner.transfer(price);
            (success, data) = owner.call{value: price}("");
            tickets[ticketID] = msg.sender;
            ticketHolders[msg.sender] = ticketID;
            message = "Purchase successful";
        }
        return (message, success, data);
    }

    function getTicketOf(address person) public view returns (uint256) {
        return ticketHolders[person];
    }

    function setTicketOf(address person, uint256 ticketID) public restricted {
        ticketHolders[person] = ticketID;
        tickets[ticketID] = person;
    }

    function offerSwap(address partner) public returns (string memory, bool success) {
        string memory message;
        bool success;
        if (ticketHolders[msg.sender] == 0 && ticketHolders[partner] == 0) {
            message = "One or both parties do not own a ticket";
        } else {
            offers[msg.sender] = partner;
            success = true;
            message = "Offer creation successful";
        }
        return (message, success);
    }

    function acceptSwap(address partner) public returns (string memory, bool success) {
        string memory message;
        bool success;
        if (offers[partner] == address(0)) {
            message = "No offer exists";
        } else if (ticketHolders[msg.sender] == 0 && ticketHolders[partner] == 0) {
            message = "One or both parties do not own a ticket";
        } else {
            tickets[ticketHolders[msg.sender]] = partner;
            tickets[ticketHolders[partner]] = msg.sender;
            uint256 tmp = ticketHolders[msg.sender];
            ticketHolders[msg.sender] = ticketHolders[partner];
            ticketHolders[partner] = tmp;
            success = true;
            message = "Offer acceptance successful";
        }
        return (message, success);
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function setOwner(address _owner) public restricted {
        owner = payable(_owner);
    }

    function getNumTickets() public view returns (uint256) {
        return numTickets;
    }

    function setNumTickets(uint256 _numTickets) public restricted {
        numTickets = _numTickets;
    }

    function getPrice() public view returns (uint256) {
        return price;
    }

    function setPrice(uint256 _price) public restricted {
        price = _price;
    }

    function getTicketOwner(uint256 ticketID) public view returns (address) {
        return tickets[ticketID];
    }

    function setTicketOwner(uint256 ticketID, address ticketOwner) public restricted {
        tickets[ticketID] = ticketOwner;
    }

    function getTickets() public view returns (address[] memory) {
        return tickets;
    }

    function setTickets(address[] memory _tickets) public restricted {
        tickets = _tickets;
    }
}
