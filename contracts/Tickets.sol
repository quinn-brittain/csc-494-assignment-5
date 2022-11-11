// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract Tickets {
    address payable private owner;
    uint256 private numTickets;
    uint256 private price;
    address[] private ticketHolders;

    constructor(uint256 _numTickets, uint256 _price) {
        owner = payable(msg.sender);
        numTickets = _numTickets;
        price = _price;
    }

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    function buyTicket(uint256 ticketID) public payable {
        require(msg.value >= price);
    }

    function getTicketOf(address person) public view returns (uint256) {}

    function offerSwap(address partner) public {}

    function acceptSwap(address partner) public {}

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

    function getTicketHolder(uint256 index) public view returns (address) {
        return ticketHolders[index];
    }

    function setTicketHolder(uint256 index, address ticketHolder) public restricted {
        ticketHolders[index] = ticketHolder;
    }

    function getTicketHolders() public view returns (address[] memory) {
        return ticketHolders;
    }

    function setTicketHolders(address[] memory _ticketHolders) public restricted {
        ticketHolders = _ticketHolders;
    }
}
