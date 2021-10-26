import React, { Component } from 'react';

class Main extends Component {
    state = {
        counter: 0,
    };

    addOneHandle = () =>{
        this.setState({
            counter: this.state.counter + 1
        });
    }; 

    removeOneHandle = () =>{
        if (this.state.counter !== 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }; 

    reset = () =>{
        this.setState({
            counter: 0
        });
    };

    render() {
        let circle ="";
        // if (this.state.counter === 0){
        //     circle = "circle"
        // } else if (this.state.counter % 2 === 0) {
        //     circle = "circle even"
        // } else {
        //     circle =  "circle odd"
        // }
        this.state.counter === 0
        ? (circle="circle")
        : this.state.counter % 2 === 0
        ? (circle="circle even")
        : (circle="circle odd");

        return (
            <div>
                <div className="main">
                <h2 className={circle}>{this.state.counter}</h2>
                </div>

                <div className="main">
                <button className="button" onClick ={this.addOneHandle}>Add one</button>
                <button className="button" onClick={this.removeOneHandle}>Remove one</button>
                <button className="button" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
}

export default Main;