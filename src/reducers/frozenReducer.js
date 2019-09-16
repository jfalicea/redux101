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
    console.log(action.type)
    return state;
}