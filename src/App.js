// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';

import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router,
  Routes,
  Route,
  // Link 
} from "react-router-dom";


export default class App extends Component {
   pagesize = 10;
  //  YOU CAN ACCESS THE ENVIORMENT VARIABLE THROUGH {PROCESS.ENV}
  apikey = process.env.REACT_APP_NEWS_API
  state = {
   progress:0
  }
   setprogress = (progresss)=>{
    this.setState({
      progress: progresss
    })
   }
  render() {
    return (
      <div>

      <Router>
             <LoadingBar
                color='#f11946'
                progress={this.state.progress}
                height={3}
              />
        <Navbar/>

        <Routes>
          <Route exact path='/' element={ <Newscomponent apikey={this.apikey}   Progress={this.setprogress} key = "general" pagesize={this.pagesize} category="general" country="in"/> }></Route>
          <Route exact path='/business' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key="business" pagesize={this.pagesize} category="business" country="in"/> }></Route>
          <Route exact path='/Sports' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key="sports" pagesize={this.pagesize} category="sports" country="in"/> }></Route>
          <Route exact path='/health' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key = "health"pagesize={this.pagesize} category="health" country="in"/> }></Route>
          <Route exact path='/science' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key="science" pagesize={this.pagesize} category="science" country="in"/> }></Route>
          <Route exact path='/technology' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key="technology" pagesize={this.pagesize} category="technology" country="in"/> }></Route>
          <Route exact path='/entertainment' element={ <Newscomponent apikey={this.apikey}  Progress={this.setprogress} key="enetertainment" pagesize={this.pagesize} category="entertainment" country="in"/> }></Route>
        </Routes>
        {/* </LoadingBar> */}
      </Router>
      </div>
    )
  }
}

// export default App;
