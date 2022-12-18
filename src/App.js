import React from "react";
import web3 from "./web3";
import tickets from "./tickets";
import './App.css'

class App extends React.Component {
    state = {
        message: ' ',
        address: '',
        owner: '',
        price: 0,
        ticketList: [],
        selectedTicket: -1,
    };

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts[0])
        const address = tickets.options.address;
        const owner = await tickets.methods.getOwner().call({ from: accounts[0] });
        const price = await tickets.methods.getPrice().call({ from: accounts[0] });
        const ticketList = await tickets.methods.getTickets().call({ from: accounts[0] });
        this.setState({ address, owner, price, ticketList });
    }

    render() {
        return (
            <div className="App">
                <div className="card-body">
                    <form className="tickets">
                        <div className="ticket-selection card border-primary mb-3">
                            <div className="card-header">Select Ticket</div>
                            <div className="card-body">
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    {this.state.ticketList.map((ticket, i) => {
                                        if (ticket === 0) {
                                            return (
                                                <div className="ticket">
                                                    <input type="radio" className="btn-check" name="btnradio" id={"btnradio" + i} autoComplete="off" />
                                                    <label className="btn btn-outline-info" htmlFor={"btnradio" + i}>{i}</label>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className="ticket">
                                                    <input type="radio" className="btn-check" name="btnradio" id={"btnradio" + i} autoComplete="off" />
                                                    <label className="btn btn-outline-secondary" htmlFor={"btnradio" + i}>{i}</label>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="legend">
                                    <span className="badge bg-info">Available</span> <span className="badge bg-secondary">Purchased</span> <span className="badge bg-success">Owned</span>
                                </div>
                            </div>
                        </div>
                        <div className="ticket-actions">
                            <div><button type="button" className="btn btn-success" onClick={this.onClick}>Buy</button> for {this.state.price} ETH</div>
                            <div><button type="button" className="btn btn-primary">Swap</button></div>
                        </div>
                        <hr />
                        <div className="transaction-message">
                            {this.state.message}
                        </div>
                    </form>
                    <form className="offers">
                        <div className="offer-selection card border-primary mb-3">
                            <div className="card-header">Swap Offers</div>
                            <div className="card-body">

                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-muted">
                    Contract Address: {this.state.address}
                </div>
            </div>
        );
    };

    onClick = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({ message: <div className="alert alert-info"><p className="mb-0">'Wait on transaction success...'</p></div> })

        await tickets.methods.buyTicket(this.state.selectedTicket).send({
            from: accounts[0],
            value: web3.utils.toWei(this.state.price, 'ether')
        });
        this.setState({ message: <div className="alert alert-success"><p className="mb-0">'Ticket purchase successful!'</p></div> });
    };
}

export default App;
