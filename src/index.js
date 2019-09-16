import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1. install react-redux
import {Provider} from 'react-redux';

// 2. create a redux store, so that: 
//2.1. redux exists 
//2.2. The provider has the store, imort createStore. 
import {createStore} from 'redux';
//3. create reducers to populate the store 
import rootReducer from './reducers/rootReducers.js'
//3.1. reducers go into the rootReducer 
//3.2.  Make individual reducer to go into the rootReducer
//4.  actually create the store, by passing createStore rootReducer whihc is made up of the individual reducers. 
//the store is now fully stocked of reducer. 
const aPublix = createStore(rootReducer);

//5.  provider is the component that glues React and Reux together... 
//we hand the Provider to ReactDOM.render
//AND we hand the Provider a prop of store, with our Store


ReactDOM.render(
    <Provider store={aPublix}>
        <App />
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
