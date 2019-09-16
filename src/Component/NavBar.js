import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }




  
  render(){
    return(<>
        <div>
          <h1>WELCOME TO THE INVENTORY SYSTEM</h1>
          <ul>
            <li><Link to="/"> HOME </Link></li>
            <li><Link to="/meat-dept"> MEAT </Link></li>
            <li><Link to="/frozen-dept"> FROZEN FOODS </Link></li>
            <li><Link to="/dairy-dept"> DAIRY </Link></li>
          </ul>
        </div>   
    </>)
  }
}
export default NavBar;