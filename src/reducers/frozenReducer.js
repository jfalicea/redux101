//all reducers have two params.
//1. current state, usually proivde a default 
//2. The action object --> 

//typically you'd make an http request to get this data...
const seedData = [
    {
        food: 'pizza',
        quantity: 12
    },
    {
        food: 'ice cream',
        quantity: 21
    },
    {
        food: 'family dinner',
        quantity: 5
    },
    {
        food: 'frozen veggies',
        quantity: 132
    }
]


export default (state = seedData, action)=>{
    console.log("frozenReducer is running!")
    // console.log("=======================================",action.type)
    if(action.type === 'updateFrozen'){
        // console.log('("=======================================",actiontype is running')
            let newState = [...state]
            if(action.payload.operation === "+"){
                newState[action.payload.indexToChange].quantity++
            }else if(action.payload.operation === "-"){
                newState[action.payload.indexToChange].quantity--;

    }
        return newState 
    }
    else if(action.type === 'clearInv'){
        return []
    }
    else if (action.type === 'resetInv'){
        return state = seedData
    }
    else if(action.type === 'addItem-Frozen'){
        let newState = [...state];
        const food = action.payload.food
        const quantity = action.payload.quantity
        // const { food, quantity } = action.payload
        newState.push({
            food,
            quantity
        })
        return newState
    }
    return state;
}
