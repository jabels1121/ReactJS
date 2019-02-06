import React, {Component} from 'react';

class Exercise extends Component {
    state = {time: null};

    componentDidMount() {
        this.tick();
    }

    tick() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()})
        }, 1000);
    }

    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

export default Exercise;
