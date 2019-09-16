import React from 'react';
import {connect} from 'react-redux'
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

    const storeInventoryDiv = storeInventoryArray.map((product,i)=>{
      console.log(product)
      // console.log(i)
      // console.log(product[i].food)
      return (<li key={i}>{product.food}................{product.quantity}</li>)
    })



    return(<>
      <h1>Current Store Inventory!</h1>
      <ul>
      {storeInventoryDiv}
      </ul>
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

export default connect(mapStateToProps)(Main)
// export default Main;