import React, { Component, } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "./component/main"
import Arm from "./component/arm_list"
import Chest from "./component/chest_list"
import Lat from "./component/lat_list"
import Leg from "./component/leg_list"

import CurvedLine from "./component/linebar"
import Data from "./component/data"
import Detail_view from './component/detail_view';
import Header from './component/header'
import Footer from './component/footer'
 class App extends Component { 
   render() { 
   return ( 
      <Router> 
        <Header></Header>
        <div> 
          <Route exact path="/" component={Main} />  
          <Route path="/arm/" component={Arm} />
          <Route path="/chest/" component={Chest} />
          <Route path="/lat/" component={Lat} />
          <Route path="/leg/" component={Leg} />
          <Route path="/detail/:list" component={Detail_view} />
          <Route path="/line/" component={CurvedLine} />
          <Route path="/data/" component={Data} />
        </div> 
        <Footer></Footer>
    </Router>  
    );
   }
   }
    export default App;

