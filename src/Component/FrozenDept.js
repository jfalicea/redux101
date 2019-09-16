import React from 'react';
import {connect} from 'react-redux'


class FrozenDept extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    const frozenArray = this.props.frozenData;
    const frozenDiv = frozenArray.map((product, i)=>{
      return (
        <li key={i}>{product.food}.....................{product.quantity}</li>
      )
    })



    console.log("THIS", this.props.frozenData)
    return(<>
      <h1>Frozen Department Inventory</h1>
      <ul>
      {frozenDiv}
      </ul>
    </>)
  }
}

function mapStateToProps(state){
    return {
      frozenData: state.frozen
    }
  }

 

export default connect(mapStateToProps)(FrozenDept)

// export default FrozenDept;