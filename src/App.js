import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './Component/NavBar'
import Main from './Component/Main'
import FrozenDept from './Component/FrozenDept'
import MeatDept from './Component/MeatDept'
import DairyDept from './Component/DairyDept'

function App(props){
  return(
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Main} />
        <Route exact path="/frozen-dept" component={FrozenDept} />
        <Route exact path="/meat-dept" component={MeatDept} />
        <Route exact path="/dairy-dept" component={DairyDept} />
      </div>
    </Router>
  )
}
export default App;