// import React, { Component } from 'react';
// import A from 'react-native-a'
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';  /*This import essentially says import Education CLass component of REact from a file/module called education*/
import Experience from './experience';
import Skills from './skills';
// import { Link } from 'react-router';
import Avatar from './image/main profile picture.JPG'

import AdditionalCertificate from './additionalcertificate';
// import { Grid, Cell } from 'react-mdl';
// import Education from '../../UI/components/components/education';
// import Experience from '../components/experience';
// import Skills from '../components/skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Avatar}
                alt="picture-mode"
                style={{height: '200px',width:'200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Victor Nkuna</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>5 Flammingo Crescent,
               Nerissa Estate, 
                Lansdwane,
                  7780</p>
            <h5>Phone</h5>
            <p>(+277) 670-170851</p>
            <h5>Email</h5>
            <p>victor.nkuna@yahoo.com</p>
            <h5>Web</h5>
            <p><a href='https://loving-ramanujan-c0c2cb.netlify.app/'>mysite</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Ngakana Secondary School"
              
               />

               <Education
                 startYear={2015}
                 endYear={2019}
                 schoolName="University of Cape Town"
                 jobDescription="Bcom(Management Studies) Management  Studies  is  the  most  flexible  three-year  degree offered in the Faculty of Commerce. The degree requires students to take a rigorous  core  of  18  courses.  In  addition  to  these  18  core  courses,  students  must  complete another 9 electives from a range of disciplines offered by Commerce and other  faculties.  These  27  courses  make  the  BCom  specialising  in  Management  Studies an intensive choice of study. Management  Studies  is  ideal  for  a  student  who  wants  a  more  personalised  combination of disciplines and the opportunity to tailor the degree to their specific requirements. The combination of academic rigour, breadth and flexibility,
                  enables students  to  leverage  their  strengths  and  interests"
                 Completed="No"
                 jobName="Provided Upon Request"

                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Working Experience</h2>
              <Experience
              schoolName="University of Cape Town: Leo Marquard Residence "
              jobName="Student Residence Librarian"
              jobDescription="• Daily inventory management and tracking
              • Liaising with various stakeholders to discuss initiatives
              • Collecting student complaints directly related to books"
              startYear={2016}
              endYear={2016} 
              />
              <hr style={{borderTop: '3px solid #e22947'}} />


              <h2>Additional Certificate</h2>

              <AdditionalCertificate
                Name="Responsive Web Design HTML"
                jobDescription="https://www.freecodecamp.org/"
                startYear={2020}
                endYear={2019}
                jobName="Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)"
                schoolName="https://www.freecodecamp.org/certification/fcc276718ef-256c-4c3e-a4c3-d8bfe61859cc/responsive-web-design"
                />

              <AdditionalCertificate
                Name="HTML Course"
                schoolName="https://www.sololearn.com/learning/1014"
                // startYear={2020}
                // endYear={2020}
                jobName="This course  teach ones how to design a web 
                            page using HTML.Complete a series of hands-on exercises and practice while writing real HTML code."
                Credential-ID="https://www.sololearn.com/Certificate/1014-16998995/pdf"
                />

              <AdditionalCertificate
                Name="JavaScript Course"
                schoolName="<A>https://www.sololearn.com/learning/1024</A>"
                startYear={2020}
                endYear={2020}
                jobName="Responsive Web Design (HTML, CSS, Flexbox, CSS Grid)"
                Credential="https://www.sololearn.com/Certificate/1024-16998995/pdf/"
                />

                

              <Additional-Certificate
                Name="Presentation Skills Course"
                schoolName="https://jenxhr.wordpress.com/services/ "
                startYear={2015}
                endYear={2015}
                jobDescription="Professional Presentation and Communication Skills Programs"
                Credential="https://drive.google.com/file/d/1s451FfWV1YIKxFkJveUwcOL0uO1-K6jh/view?usp=sharing"
                />


              <Volunteering-Experience
                Name="Social Service"
                IssuingOrganization="<A>https://marquardroar.wordpress.com/2016/03/06/residential-life-leo-marquard-hall/</A>"
                startYear={2016}
                endYear={2016}
                jobName="Outreach Intern"
                jobName="As an Outreach intern, I was assisting with the overall seamless functioning of 24 centres by helping with many of the outreach needs and general office assistance of the organization. Core functions of this position include supporting the
                Regional Director in stewardship and outreach with event participants, as well as assisting in administrative duties focused on
                event recruitment and fundraising. Tasks include pulling and analyzing reports from our fundraising platform, prepping event
                materials and logistics, and communicating with event participants and event sponsors. The intern position exposed me to a nonprofit organization, fundraising, database management, community outreach, and communications.
                requires a positive attitude, ability to work independently and as a team, and proven writing, editing, and customer service
                skills.The role required some one who was comfortable on the phone and willing to attend events. "
                Credential="https://drive.google.com/file/d/1XHwzsqUAITRUxBcYceBP_5o9a7QDup5g/view?usp=sharing"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={45}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
                      <Skills
                      skill="Python-Flask-Django"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;


