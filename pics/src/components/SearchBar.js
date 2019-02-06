import React, {Component} from 'react';

class SearchBar extends Component {
    state = {term: ''};

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
        this.setState({term: ''});
    };

    render() {
        return (
            <div className="ui segment">
                <form
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field">
                        <label>{this.props.labelText}</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => {
                                this.setState({term: e.target.value});
                            }}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

SearchBar.defaultProps = {
    labelText: 'Image search'
};

export default SearchBar;