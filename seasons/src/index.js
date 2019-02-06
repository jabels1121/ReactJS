import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import Exercise from './Exercise';

class App extends Component {
    state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat: pos.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return (
            <Spinner message='Waiting until you access to your geolocation data.'/>
        );
    }

    render() {
        return (
            <Exercise/>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));