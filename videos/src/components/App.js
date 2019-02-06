import React, {Component} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        try {
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
        } catch (e) {
            console.log(e);
        }
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };

    renderVideoDetail = () => {
        if (this.state.selectedVideo) {
            return <VideoDetail video={this.state.selectedVideo}/>
        }
    };

    render() {
        return (
            <div className="ui container" style={{marginTop: '15px'}}>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {this.renderVideoDetail()}
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;