//this file is an action creator; 
//action creators return actions
//what is an action?   an action is an object!
//that has at least 1 property ===>  type
//the action (object with a type property)
    //is then going to be handed to he dispatch 
    //the dispatch will send that action to all reducers! 



//line 4 is an ACTION CREATOR 




export default (operation,indexToChange)=>{
    return{
        type: 'updateFrozen',
        payload: {
            operation,
            indexToChange
        } 
    }
}

