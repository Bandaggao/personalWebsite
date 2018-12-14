
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
// import About from './components/About';
import Contact from '../pages/Contact';


  

class Nav extends Component {
  constructor(props){
    super(props);
    this.state ={
      toggleShow: false
    }
  }
  showToggle(e) {
    e.preventDefault();
    this.setState(({
      toggleShow: !this.state.toggleShow
    }));
    console.log(this.state.toggleShow)
  }
  render() {
    return (
      
      
      
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className={this.state.toggleShow === true ? "navbar-toggler collapsed" : "navbar-toggler"} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded={this.state.toggleShow === true ? "true" : "false"} aria-label="Toggle navigation"
        onClick={(e) => {this.showToggle(e)}}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={this.state.toggleShow === true ? "collapse navbar-collapse show" : "collapse navbar-collapse" } id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <ul className="navbar-nav mr-auto">
            <li className ><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
          </ul>
          </ul>
          </div>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              {/* <Route path='/about' component={About} /> */}
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default Nav;
