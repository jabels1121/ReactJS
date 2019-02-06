import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import * as ReactRedux from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import App from './components/App';
import reducers from './reducers';

/*
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);*/


// Action creators
const increment = () => {
    return {
        type: 'increment'
    }
};

const decrement = () => {
    return {
        type: 'decrement'
    }
};


// Component
const Counter = (props) => {
    console.log(props);
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}>
            <button onClick={props.clickIncrement}>increment</button>
            <button onClick={props.clickDecrement}>decrement</button>
            Count is: <span style={{marginLeft: '10px'}}>{props.count}</span>
        </div>
    );
};

// Mapping store state to component props
const mapStateToProps = state => {
    return {
        count: state.count
    }
};
// Mapping action creator functions to component props
const mapDispatchToProps = (dispatch) => {
    return {
        clickIncrement: bindActionCreators(increment, dispatch),
        clickDecrement: bindActionCreators(decrement, dispatch)
    }
};

// Create connect component
const WrappedCounter = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Counter);


// Reducers
const countReducer = (count = 10, action) => {
    switch (action.type) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        default:
            return count;
    }
};

// Create store with combine reducer
const store = createStore(combineReducers({
    count: countReducer
}));

// Render counter to the DOM
ReactDOM.render(<Provider store={store}><WrappedCounter><Counter/></WrappedCounter></Provider>, document.querySelector('#root'));