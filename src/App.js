import React from "react";
import web3 from "./web3";
import tickets from "./tickets";
import './App.css'

class App extends React.Component {
    state = {
        address: '',
        owner: '',
        price: 0,
        ticketList: []
    };

    async componentDidMount() {
        const address = tickets.options.address;
        const owner = await tickets.methods.getOwner().call({from: web3.eth.getAccounts()[0]});
        const price = await tickets.methods.getPrice().call({from: web3.eth.getAccounts()[0]});
        const ticketList = await tickets.methods.getTickets().call({from: web3.eth.getAccounts()[0]});
        // const owner = "EE";
        // const price = 5;
        // const ticketList = [1, 2, 0, 0, 3, 4, 0, 0];
        this.setState({ address, owner, price, ticketList });
    }

    render() {
        return (
            <div className="App">
                <forum className="tickets">
                    <div className="ticket-selection card border-primary mb-3">
                        <div className="card-header">Select Ticket</div>
                        <div className="card-body">
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                {this.state.ticketList.map((ticket, i) => {
                                    if (ticket === 0) {
                                        return (
                                            <div className="ticket">
                                                <input type="radio" className="btn-check" name="btnradio" id={"btnradio" + i} autocomplete="off" checked="" />
                                                <label className="btn btn-primary" for={"btnradio" + i}>{i}</label>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="ticket">
                                                <input type="radio" className="btn-check" name="btnradio" id={"btnradio" + i} autocomplete="off" checked="" />
                                                <label className="btn btn-outline-secondary" for={"btnradio" + i}>{i}</label>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="card-text">
                                <span className="badge bg-primary">Available</span> <span className="badge bg-secondary">Purchased</span> <span className="badge bg-success">Owned</span></div>
                        </div>
                    </div>
                    <div className="ticket-actions">
                        <div><button type="button" className="btn btn-success">Buy</button> for {this.state.price} ETH</div>
                        <div><button type="button" className="btn btn-primary">Swap</button></div>
                    </div>
                    <p>{this.state.address}</p>
                    <p>{this.state.owner}</p>
                </forum>
                <forum className="offers">
                    <div className="offer-selection card border-primary mb-3">
                        <div className="card-header">Swap Offers</div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </forum>
            </div>
        );
    };

    // onSubmit = async (event) => {
    //     event.preventDefault();

    //     const accounts = await web3.eth.getAccounts();

    //     this.setState({ message: 'Wait on transaction success ... ' })

    //     await tickets.methods.enter().send({
    //         from: accounts[0],
    //         value: web3.utils.toWei(this.state.value, 'ether')
    //     });
    //     this.setState({ message: 'you have been entered!' });
    // };

    // onClick = async () => {
    //     const accounts = await web3.eth.getAccounts();

    //     this.setState({ message: "Waiting on transaction success..." });

    //     await tickets.methods.pickWinner().send({
    //         from: accounts[0],
    //     });
    //     this.setState({ message: "A winner has been picked!" });
    // };
}

export default App;
