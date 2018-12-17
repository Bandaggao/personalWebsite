
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import NavItem from './ActiveNavItem'
import Resume from '../pages/Resume';
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
          
          <NavItem path="/" name="Home">  <li className ><Link to={'/'} className="nav-link"> Home </Link></li> </NavItem>
           <NavItem path="/contact" name="Contact"> <li><Link to={'/contact'} className="nav-link">Contact</Link></li> </NavItem>
            {/* <li><Link to={'/about'} className="nav-link">About</Link></li> */}
            <NavItem path="/resume" name="Resume"> <li><Link to={'/resume'} className="nav-link">Resume</Link></li> </NavItem>
          
          </ul>
          </div>
          </nav>
        <div class="indexNav">
          <div class="navContent">
           <div>
             <h2 class="text-align-center Italic">Find Out more about me</h2>
             <h1 class="text-align-center bold">Dig a Little Deeper</h1>
           </div> 

           <div>
         <a href="https://drive.google.com/file/d/1QUH9doHBIubfaFgFeUZM_DN7QjdJrJoP/view"><button type="button" class="resumebutton">Download Resume</button> </a>
          </div>
          </div>
      </div>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              { <Route path='/resume' component={Resume} /> }
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default Nav;
