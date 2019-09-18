import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import updateDairy from '../actions/dairyInvUpdate'
import AddItem from './AddItem'

class Dairy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  changeQuantity =(operation,IndexToChange)=>{
    this.props.updateDairy(operation,IndexToChange)  
  }

  render(){
    // console.log(this.props.dairyData)
    const dairyArray =this.props.dairyData
    const dairyDiv = dairyArray.map((product,i)=>{
      return (
        <div key={i}>
          <h4>{product.food}.......................{product.quantity}</h4>
          <input className="add-button" type="button" onClick={()=>{this.changeQuantity("+",i)}} value="+" />
        <input className="subtract-button" type="button" onClick={()=>{this.changeQuantity("-",i)}} value="-" />

        </div>
      )
    })
    return(<>
      <h1>Dairy Inventory</h1>
      <AddItem dept="Dairy"/>
      {dairyDiv}
    </>)
  }
}

function mapDispatchToProps(dispatch){
  return(
    bindActionCreators({
      updateDairy
    },dispatch)
  )
}



function mapStateToProps(state){
  return {
    dairyData: state.dairy
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Dairy)

// export default Dairy;