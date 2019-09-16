//this is the rootReducer. 
//to make a rootReducer
//1. get a method from redux call "combineReducers"
import {combineReducers} from 'redux';


//2. Get each individual reducer 
//the store is managed by rootReducer 
//the managerneeds individual department....the reducers 


import frozenReducer from './frozenReducer'
import dairyReducer from './dairyReducer'
import meatReducer from './meatReducer'


//3. call combineReucers and hand it an object. 
//3.1. Each key in the object we pass to CombineReducers 
//will be a piece of state in the redux Store
//3.2 Each value will be the value of that peice of state in the redux store

const rootReducer = combineReducers({
    frozen: frozenReducer, 
    dairy: dairyReducer, 
    meat: meatReducer
})

export default rootReducer;