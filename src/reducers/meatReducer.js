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
    return state;
}