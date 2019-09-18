const seedData = [
    {
        food: 'cheese',
        quantity: 120
    },
    {
        food: 'milk',
        quantity: 37
    },
    {
        food: 'yogurt',
        quantity: 75
    },
    {
        food: 'kefir',
        quantity: 3
    }
]


export default (state = seedData, action)=>{
    console.log("dairyReducer is running!")
    let newState = [...state]
    if(action.type === 'updateDairy'){
        if(action.payload.operation === "+"){   
            newState[action.payload.indexToChange].quantity++
        }
        if(action.payload.operation === "-"){   
            newState[action.payload.indexToChange].quantity--
        }
        return newState
    }
    else if(action.type === 'clearInv'){
        return []
    }
    else if (action.type === 'resetInv'){
        return state = seedData
    }
    else if(action.type === 'addItem-Dairy'){
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