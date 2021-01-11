import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardActions, CardMenu,IconButton,Button} from 'react-mdl'
import aboutMe from './image/main profile picture.JPG'

class About extends Component {
  render() {
    return(
      <div><h1>Hello! I'm Victor</h1>
      <Card shadow={5} style={{width: '100%', margin: 'auto',display:'block',}}>
            <CardTitle style={{color: '#fff', height: '75%',width: '75%%', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Python Project #1</CardTitle>
            <CardText>
              <h1><img  src={aboutMe} alt="mp3-icon" style={{height:'250px'}}/></h1>
              
              
             <h1 className="godwin"> 
             I  have a diverse set of skills ,ranging from basics principles in design ux/ui ,to HTML+ CSS + JavaScript,all the way to Python and NodeJS,Basics of React application development 
        I live in  Cape Town,Besides programming I love reading about Business and the Economy,I studied at University of Cape Town,Where i studied Bcom(Management Studies),
        however it is to be noted that i did not complete my studies,I studied up to third year
             </h1>

            </CardText>

            <CardActions border>
              
              <a href="/resume"><Button colored> About Me </Button></a>
            </CardActions>
            
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
      <h2>
      </h2>

      </div>
    )
  }
}

export default About;
