import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    render() { 
        return (
            <React.Fragment>
                <span className="badge badge-primary m-2">{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    formatCounter(){
        if(this.state.count == 0){
            return 'zero';
        }else{
            return this.state.count;
        }
    };
}
 
export default Counter;