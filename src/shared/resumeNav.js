
import React, { Component } from 'react';




  

class NavResume extends Component {
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
      
      <div class="indexNav">
          <div class="navContent">
           <div>
             <h2 class="text-align-center Italic">Find Out more about me</h2>
             <h1 class="text-align-center bold">Dig a Little Deeper</h1>
           </div> 

           <div>
         <a href="https://drive.google.com/file/d/1QUH9doHBIubfaFgFeUZM_DN7QjdJrJoP/view"><button type="button" class="resumebutton">Download Resume</button> </a>
         <a href="http://localhost:3001/" target="_blank" rel="noopener noreferrer"><button type="button" class="resumebutton">Chat with my bot</button> </a>
          </div>
          </div>
      </div>
      
    );
  }
}

export default NavResume;
