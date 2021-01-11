import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import mp3 from './image/mp3-player.JPG'
import mp3_pic from './image/mp3-project-icon.png'
import inventory from './image/inventory system.png'
import inventory_2 from './image/inventory-management-system.png'



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Python Project #1</CardTitle>
            <CardText>
              <h1><img  src={mp3_pic} alt="mp3-icon" style={{height:'250px'}}/></h1>
              An MP3 Music Player the MP3 have basic functionality such as  an  area where you select
              songs. A pause button as well as the start button.
            </CardText>

            <CardActions border>
              <a href="https://github.com/developerVictorNkuna"alt="_blank"><Button colored>GitHub</Button></a>
              <a  href="https://github.com/developerVictorNkuna/simpleaudi-app-with-pygame" target="_blank"><Button colored>MP3</Button></a>
              < a href="https://github.com/developerVictorNkuna/simpleaudi-app-with-pygame" target="_blank"><img src={mp3} alt="mp3" target="_blank" style={{height:'250px'}} /></a>
              
              
              <a><Button colored> Music Player </Button></a>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Python Project #1</CardTitle>
            <CardText>
              <h1></h1>
              An Inventory  User Interface(UI) System  for the  application called Easy Ticket.
               The system will help the organisation to sell tickets easily by entering a client’s cellphone number, 
               selecting the tickets category (soccer, movie and theatre) and selecting the
                number of tickets requested
            </CardText>

            <CardActions border>
              <a href="https://github.com/developerVictorNkuna"alt="_blank"><Button colored>GitHub</Button></a>
              <Button colored>Inventory</Button>
              <a  href="https://github.com/developerVictorNkuna/simpleaudi-app-with-pygame" target="_blank"><Button colored></Button></a>
              <a href=""><Button colored>Ticket-Inventory-System</Button><img src={inventory_2} alt="mp3" target="_blank" style={{height:'250px'}} /></a>

            </CardActions>


            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}


          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            </CardText>

            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored></Button>
              <Button colored></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>Data science project #1</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
          
         
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
        <Tab>Python Flask</Tab>
          <Tab>Data Science</Tab>
          <Tab>Data Visualization</Tab>
          <Tab>React</Tab>

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

export default Projects;
