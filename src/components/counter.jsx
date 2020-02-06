import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count == 0 ? "warning" : "primary";
        return classes;
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