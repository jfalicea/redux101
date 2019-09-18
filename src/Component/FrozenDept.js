import React from 'react';
import {connect} from 'react-redux';
//in order for updateFrozen to be an action creator. we need to import 
import {bindActionCreators} from 'redux';
import updateFrozen from '../actions/frozenInvUpdate';
import AddItem from './AddItem'


class FrozenDept extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  // componentDidMount(){
  //   // this.props.updateFrozen([{}]);
  // }

  changeQuantity = (operation,IndexToChange)=>{
    console.log(operation,IndexToChange)
    this.props.updateFrozen(operation,IndexToChange) //action creator. 
  }

  render(){
    const frozenArray = this.props.frozenData;
    const frozenDiv = frozenArray.map((product, i)=>{
      return (
        <div key={i}>
        <h4>{product.food}.....................{product.quantity}</h4>
        <input className="add-button" type="button" onClick={()=>{this.changeQuantity("+",i)}} value="+" />
        <input className="add-button" type="button" onClick={()=>{this.changeQuantity("-",i)}} value="-" />
        </div>
      )
    })



    // console.log("THIS", this.props.frozenData)
    return(<>
      <h1>Frozen Department Inventory</h1>
      <ul>
        <AddItem dept="Frozen"/> 
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
        //each value will be a function, action creator, 
        //that will have its return value (action) sent to the dispatch
        updateFrozen : updateFrozen
        //updateFrozen was a regular function; however, bindActionCreator, turned it into an Action Creator. 
        //an Action Creator is a function that returns an action. 
        //An Action is an object that has at LEAST ONE property: type.  
        //the dispatch will send that object to EVERY REDUCER. 
      },dispatch)
    )
  }
 

export default connect(mapStateToProps,mapDispatchToProps)(FrozenDept)

// export default FrozenDept;