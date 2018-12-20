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
         <div class="col-sm">
          <h2 class="headings">Technologies</h2>
          </div>
          <div class="col-sm">
            <ul>
              <h3 class="headings">Day to day comfort</h3>
              <li class="liFonts">Agile Methodology</li>
              <li class="liFonts">Github (version control)</li>
              <li class="liFonts">Java</li>
              <li class="liFonts">JavaScript</li>
              <li class="liFonts">HTML/CSS</li>
              <li class="liFonts">Bootstrap</li>
            </ul>
          </div>

          <div class="col-sm-4">
            <ul>
              <h3 class="headings">Experience with</h3>
              <li class="liFonts">Android Programming</li>
              <li class="liFonts">Node.Js(Limited)</li>
              <li class="liFonts">React.Js(Limited)</li>
              <li class="liFonts">Python(limited)</li>
            </ul>
        </div>
        </div>
          <div class="row">
            <div class="col-sm-4">
              <h2 class="headings">Experience</h2>
            </div>
            <div class="col-sm- 8">
              <ul>
                <h4 class="experienceHeader">Software Developer</h4>
                <p> 
                  <strong>Questronix Corporation, September 2018 - Present <br/> </strong>
                  Analyze client requirement to best design system to meet client needs,<br/>
                  Ensures high quality project development and ontime project completion <br/>
                  Does process mapping, program coding and system debugging
                </p>
                <h4 class="experienceHeader">Local IT On-Site Support(On the job trainee)</h4>
                <p>
                    <strong>B&M Global Services Manila, January 2018 - September 2018</strong><br/>
                    Troubleshoot hardware and software related problems<br/>
                    Assist in handling minor networking concerns such as patch cabling<br/>
                    Install in-house and other application software.
                </p>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;