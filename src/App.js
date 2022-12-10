import React from "react";
import web3 from "./web3";
import tickets from "./tickets";
import './App.css'

class App extends React.Component {
    state = {
        address: '',
        owner: '',
        price: '',
        ticketList: []
    };

    async componentDidMount() {
        const address = tickets.options.address;
        // const owner = await tickets.methods.getOwner().call();
        // const price = await tickets.methods.getPrice().call();
        // const ticketsList = await tickets.methods.getTickets().call();
        const owner = "EE";
        const price = 5;
        const ticketList = [1, 2, 0, 0, 3, 4, 0, 0];
        this.setState({ address, owner, price, ticketList });
    }

    render() {
        return (
            <div className="App">
                <forum class="tickets">
                    <div class="ticket-selection card border-primary mb-3">
                        <div class="card-header">Select Ticket</div>
                        <div class="card-body">
                            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                {this.state.ticketList.map((ticket, i) => {
                                    if (ticket === 0) {
                                        return (
                                            <div class="ticket">
                                                <input type="radio" class="btn-check" name="btnradio" id={"btnradio" + i} autocomplete="off" checked="" />
                                                <label class="btn btn-outline-primary" for={"btnradio" + i}>{i}</label>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div class="ticket">
                                                <input type="radio" class="btn-check" name="btnradio" id={"btnradio" + i} autocomplete="off" checked="" />
                                                <label class="btn btn-outline-secondary" for={"btnradio" + i}>{i}</label>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div class="ticket-actions">
                        <div><button type="button" class="btn btn-primary">Buy</button> for {this.state.price} ETH</div>
                        <div><button type="button" class="btn btn-primary">Swap</button></div>
                    </div>
                </forum>
                <forum class="offers">
                    <div class="offer-selection card border-primary mb-3">
                        <div class="card-header">Swap Offers</div>
                        <div class="card-body">
                            
                        </div>
                    </div>
                </forum>
            </div>
        );
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({ message: 'Wait on transaction success ... ' })

        await tickets.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.value, 'ether')
        });
        this.setState({ message: 'you have been entered!' });
    };

    onClick = async () => {
        const accounts = await web3.eth.getAccounts();

        this.setState({ message: "Waiting on transaction success..." });

        await tickets.methods.pickWinner().send({
            from: accounts[0],
        });
        this.setState({ message: "A winner has been picked!" });
    };
}

export default App;
