// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

contract Tickets {
    address public manager;

    constructor() {
        manager = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}
