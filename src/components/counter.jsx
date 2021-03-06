import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    };

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCounter()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        if(this.state.count === 0){
            return 'zero';
        }else{
            return this.state.count;
        }
    };
}
 
export default Counter;