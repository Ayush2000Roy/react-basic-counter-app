import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div className="Counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={20} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className='count'
                    style={{ fontSize: "80px" }}>
                    {this.state.count}
                </span>
                <div>
                    <button className='reset' onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }

    increment = (by) => {
        this.setState((prevState) => {
            return {
                count: prevState.count + by
            }
        })
    }

    decrement = (by) => {
        this.setState((prevState) => {
            return {
                count: prevState.count - by
            }
        })
    }

    reset = () => { this.setState({ count: 0 }) }
}

class CounterButton extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }

    //     this.increment = this.increment.bind(this)
    // }

    render() {
        return (
            <div className='CounterButton'>
                <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by} </button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by} </button>
            </div>
        )
    }

    // increment = () => {
    //     this.setState({
    //         count: this.state.count + this.props.by
    //     })

    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement = () => {
    //     this.setState({
    //         count: this.state.count - this.props.by
    //     })

    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter