import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import godwin from './image/icon-godwin.png'
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 iconsPassword:8iHejnQCRdxAfb3 */}
          <Card shadow={5} style={{width: '100%', margin: 'auto',display:'block',}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Python Project #1</CardTitle>
            <CardText>
              <h1><img  src={godwin} alt="mp3-icon" style={{height:'250px'}}/></h1>
              <a href="https://lifechoicesacademy.com/about-salesian-life-choices/"alt="_blank"></a>
              <a  href="https://lifechoicesacademy.com/about-salesian-life-choices/" target="_blank"></a>
              < a href="https://lifechoicesacademy.com/about-salesian-life-choices/" target="_blank"></a>
              
              
             <h1 className="godwin"> “Victor is a pleasure to work with and has a potential to contribute positively to the organisation through his communication prowess.
               Godwin Head of Curriculum and Learning”...Mr Godwin Life Choice Lecture</h1>

            </CardText>

            <CardActions border>
              
              <a><Button colored> Lecture </Button></a>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

         


          {/*Odwa Nodada*/}


          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
             <Card shadow={5} style={{width: '100%', margin: 'auto',display:'block',}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://drive.google.com/file/d/1_ZZzZcpOS4mSztbEEx1SDi5uV2OKqaaR/view?usp=sharing) center / cover'}} >Python Project #1</CardTitle>
            <CardText>
              <h1><img  src={godwin} alt="mp3-icon" style={{height:'250px'}}/></h1>
              <a href="https://lifechoicesacademy.com/about-salesian-life-choices/"alt="_blank"></a>
              <a  href="https://lifechoicesacademy.com/about-salesian-life-choices/" target="_blank"></a>
              < a href="https://lifechoicesacademy.com/about-salesian-life-choices/" target="_blank"></a>
              
              
             <h1 className="godwin"> "Victor is one of the dedicated hardworking and innovative individual
             ,He is the type of person you can count on to keep a cool head in  a stressfull situation and his positive attitude is contagious.
              He has wide array of skills which make him suitable for different varying types of projects"</h1>

            </CardText>

            <CardActions border>
              
              <a><Button colored> ClassMate</Button></a>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
         
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Projects under construction </h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>Godwin Dzvapatsva  -Lecture</Tab>
          <Tab>Odwa Nodada -ClassMate</Tab>
          <Tab>Victor Turinayo -ClassMate</Tab>
          <Tab>Liam Horne -ClassMate</Tab>
          <Tab>Lelethu Ndidi -ClassMate</Tab>

        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}



// export default { Testimonials ,Reviews }; this is the ES6 method of exporting multiple JS Files as modules
export default Testimonials;

