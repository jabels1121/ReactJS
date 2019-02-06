import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {StreamDelete, StreamEdit, StreamList, StreamShow} from './streams';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;