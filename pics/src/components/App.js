import React, {Component} from 'react';
import unsplash from '../components/api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = {images: []};

    // async callback function to fetching images from remote API, inserted into SearchBar component and running after form was submitted.
    onSearchSubmit = async term => {
        try {
            const response = await unsplash.get('/search/photos', {
                params: {query: term}
            });

            this.setState({images: response.data.results});


        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;