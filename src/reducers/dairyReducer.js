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
    return state;
}