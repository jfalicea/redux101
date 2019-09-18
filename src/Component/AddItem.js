import React from 'react';
import addItemAction from '../actions/addItemAction'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AddItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      food : "",
      quantity: 0
    };
  }

  submitItem = (e)=>{
      e.preventDefault();
      console.log(this.state.food)
      this.props.addItemAction(
        this.props.dept,
        this.state.food,
        this.state.quantity
      )
  }

  changeFood = (e)=>{
    this.setState({food:e.target.value})
  }

  changeQuntity = (e)=>{
    this.setState({quantity:Number(e.target.value)})
  }



  render(){
    return(<>
      <form onSubmit={this.submitItem}>
          <input value={this.state.food} onChange={this.changeFood} type="text" placeholder='Food Name' />
          <input value={this.state.quantity} onChange={this.changeQuntity}type="number" min="0" placeholder="0" />
          <input type="submit" value="Submit" />
      </form>
    </>)
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addItemAction: addItemAction
  },dispatch)
}
// export default AddItem;
export default connect(null,mapDispatchToProps)(AddItem)