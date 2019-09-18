const seedData = [
    {
        food: 'steak',
        quantity: 20
    },
    {
        food: 'chicken',
        quantity: 50
    },
    {
        food: 'fish',
        quantity: 12
    },
    {
        food: 'crab',
        quantity: 120
    }
]


export default (state = seedData, action)=>{
    console.log("meatReducer is running!")
    console.log(action.type)
    if(action.type === 'updateMeat'){
        let newState = [...state]
        if(action.payload.operation === "+"){   
            newState[action.payload.indexToChange].quantity++
        }
        if(action.payload.operation === "-"){   
            newState[action.payload.indexToChange].quantity--
        }
        return newState}
        else if(action.type === 'clearInv'){
            return []
        }
        else if (action.type === 'resetInv'){
            return state = seedData
        }
        else if(action.type === 'addItem-Meat'){
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