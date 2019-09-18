import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import clearInv from '../actions/clearInv';
import resetData from '../actions/resetInv'
class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    // console.log(this.props.frozenData)
    // console.log(this.props.meatData)
    // console.log(this.props.dairyData)
    const storeInventoryArray = [ ...this.props.frozenData, ...this.props.meatData, ...this.props.dairyData]
    // console.log(storeInventoryArray)
    const frozenQuantity = this.props.frozenData.reduce((a,b)=>a+b.quantity,0)
    const meatQuantity = this.props.meatData.reduce((a,b)=>a+b.quantity,0)
    const dairyQuantity = this.props.dairyData.reduce((a,b)=>a+b.quantity,0)

    const storeInventoryDiv = storeInventoryArray.map((product,i)=>{
      console.log(product)
      // console.log(i)
      // console.log(product[i].food)
      return (
      <li key={i}>{product.food}................{product.quantity}</li>
      )
    })
    
    console.log(frozenQuantity)

    return(<>
      <h1>Current Store Inventory!</h1>
      <h2>FROZEN QUANT:   {frozenQuantity}</h2>
      <h2>DARIY QUANT: {dairyQuantity}</h2>
      <h2>MEAT QUANT: {meatQuantity}</h2>

      <ul>
      {storeInventoryDiv}
      </ul>
      <button onClick={this.props.clearInventory}>CLEAR ALL INVENTORY</button>
      <button onClick={this.props.resetInventory}>RESET INVENTORY</button>
    </>)
  }
}
function mapStateToProps(state){
  return{
    frozenData: state.frozen,
    meatData: state.meat,
    dairyData: state.dairy
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    clearInventory: clearInv,
    resetInventory: resetData
  },dispatch)

}



export default connect(mapStateToProps,mapDispatchToProps)(Main)
// export default Main;