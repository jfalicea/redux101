import React from 'react';
import { connect } from 'react-redux';
class Dairy extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    // console.log(this.props.dairyData)
    const dairyArray =this.props.dairyData
    const dairyDiv = dairyArray.map((product,i)=>{
      return (
        <div key={i}>{product.food} <span>{product.quantity}</span></div>
      )
    })
    return(<>
      <h1>Dairy Inventory</h1>
      {dairyDiv}
    </>)
  }
}

function mapStateToProps(state){
  return {
    dairyData: state.dairy
  }
}



export default connect(mapStateToProps)(Dairy)

// export default Dairy;