import React, { Component } from 'react';
import NavResume from '../shared/resumeNav';


class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <NavResume/>
          </div>
          <div class="container-fluid">
         <div class="row">
         <div class="col-xs-8 col-md-1">
          <h2 class="headings">Technologies</h2>
          </div>
          <div class="col-xs-8 col-md-8">
          <h2 class="headings">Day to day comfort</h2>
          <li class="liFonts">Agile Methodology</li>
          <li class="liFonts">Github (version control)</li>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Contact;