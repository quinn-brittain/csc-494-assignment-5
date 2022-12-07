import React from "react";
import web3 from "./web3";
import tickets from "./tickets";

class App extends React.Component {
    state = {
        manager: '',
        players: [],
        balance: '',
        address: '',
        value: '',
    };
    async componentDidMount() {
        const manager = await tickets.methods.manager().call();
        const players = await tickets.methods.getPlayers().call();
        const address = tickets.options.address;
        const balance = await web3.eth.getBalance(tickets.options.address);
        this.setState({ manager, players, balance, address });
    }
    /*
    render(){
       return (
        <div className="App">
          <h2>Lottery Contract</h2>
          <p>This contract is managed by {this.state.manager},
          The contract address is {this.state.address},
          There are currenlty {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance,'ether')} ether!
          </p>
         </div>
      );
    }*/


    /*render(){
       return (
        <div className="App">
          <h2>Lottery Contract</h2>
          <p>This contract is managed by {this.state.manager},
          The contract address is {this.state.address},
          There are currenlty {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance,'ether')} ether!
          </p>
  
         <form onSubmit={this.onSubmit}>
            <h4> Want to try your luck?</h4>
            <div>
            <label>Amount of ether to enter </label>
            <input
              value={this.state.value}
              onChange={event=> this.setState({value: event.target.value})}
            />
            </div>
            <button>Enter</button>
          </form>
          <h1>{this.state.message}</h1>
         </div>
      );
    }*/

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

    render() {
        return (
            <div className="App">
                <p>This contract is managed by {this.state.manager}</p>
                <p>The contract address is {this.state.address}</p>
                <form onSubmit={this.onSubmit}>
                    <h4> Want to try your luck?</h4>
                    <div>
                        <label>Amount of ether to enter </label>
                        <input
                            value={this.state.value}
                            onChange={event => this.setState({ value: event.target.value })}
                        />
                    </div>
                    <button>Enter</button>
                </form>
                <hr />
                <h4>Ready to pick a winner?</h4>
                <button onClick={this.onClick}>Pick a winner!</button>
                <hr />
                <h1>{this.state.message}</h1>
            </div>
        );
    }

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
