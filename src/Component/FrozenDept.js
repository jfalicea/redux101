import React from 'react';
import {connect} from 'react-redux';
//in order for updateFrozen to be an action creator. we need to import 
import {bindActionCreators} from 'redux';
import updateFrozen from '../actions/frozenInvUpdate';


class FrozenDept extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    this.props.updateFrozen();
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

  function mapDispatchToProps(dispatch){
    // mapDispatchToProps is how we connect 
    //our component using this action creator to the dispatch
    //this function returns bind action creators and we hand bind action crrators an object
    return(
      bindActionCreators({
        //each property will be a local prop for this function. 
        //each value will be a function, action creator, that will have its return value (action) sent to the dispatch
        updateFrozen : updateFrozen
      },dispatch)
    )
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept)

// export default FrozenDept;