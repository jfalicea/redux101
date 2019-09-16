import React from 'react';
//in order for this component to know about Redux we need some glue
//react-redux...is the glue... specifically Connect. 
import {connect} from 'react-redux';

class MeatDept extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    const meatArray = this.props.meatData
    const meatDiv = meatArray.map((product,i)=>{
      return (
        <li key={i}>{product.food}..............{product.quantity}</li>
      )
    })


    return(<>
      <h1>Meat Department Inventory</h1>
      <ul>
        {meatDiv}
      </ul>
    </>)
  }
}

function mapStateToProps(state){
  //mapStateToProps takes 1 arg: "State"
  //that "state" var is the rootReducer (store)
  //mapStateToProps returns an object with: 
  //key/property is the local prop name in THIS component 
  //value will be the property in the rootReducer(store)
    return {
      meatData: state.meat
    }
  }


//WHEN you use Redux, you dont export the class
//you export connect(a function)
//connect takes 2 args:
//1. a functation that is going to map state to props
//2. a function that maps the dispatch to props. 
//3.  CONNECT IS A FUNCTION THAT RETURNS A FUNCTION!!!!!!!!!!!!
//3.1  that function takes an arg (which is the Class)
export default connect(mapStateToProps)(MeatDept)

// export default MeatDept;