import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    };

    render() { 
        return (
            <React.Fragment>
                <span>{this.formatCounter()}</span>
                <button>Increment</button>
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