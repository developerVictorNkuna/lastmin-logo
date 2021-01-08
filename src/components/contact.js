// import React, { Component } from 'react';
// import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


// class Contact extends Component {
//   render() {
//     return(
//       <div className="contact-body">
//         <Grid className="contact-grid">
//           <Cell col={6}>
//             <h2>Paul Hanna</h2>
//             <img
//               src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
//               alt="avatar"
//               style={{height: '250px'}}
//                />
//              <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

//           </Cell>
//           <Cell col={6}>
//             <h2>Contact Me</h2>
//             <hr/>

//             <div className="contact-list">
//               <List>
//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                     <i className="fa fa-phone-square" aria-hidden="true"/>
//                     (123) 456-7890
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                     <i className="fa fa-fax" aria-hidden="true"/>
//                     (123) 456-7890
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                     <i className="fa fa-envelope" aria-hidden="true"/>
//                     someone@example.com
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
//                     <i className="fa fa-skype" aria-hidden="true"/>
//                     MySkypeID
//                   </ListItemContent>
//                 </ListItem>


//               </List>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
//     )
//   }
// }

// export default Contact;



import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import office from './image/victor.jpg'

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Hi,I'm Victor Nkuna and, I'm a Junior Fullstack Developer</h2>
            <img
            /*Assuming logo.png is in the same folder as JS file so that babel can see it
              import logo from './logo.png';
              <img src={logo} alt="logo" />*/
              src={office}
              alt="avatar"
              style={{height: '250px'}}
               />
               {/*image tag end here */}

               
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             I'm an individual characterised by openness to experience and a dynamic personality which is epitomized by my intellectual curiosity. 
             I have a keen interest in the financial service industry in its broadest form, 
             specifically financial inclusion using latest technology like block-chain and Artificial Intelligence.  
             </p>
             <br />
             <hr />
             <form >
               <label htmlFor="name">Name</label><br />
               <input type="text" /> <br />
              <label >Email address</label> <br />
              <input type="email"  /> <br />
              <label htmlFor="message">Message</label><br />
              <textarea ></textarea>< br />
              <button type="submit" >Submit</button>
            </form>
            

             

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: 'skyblue'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+277) 670-170851
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: 'skyblue'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    victor.nkuna@hotmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: 'skyblue'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    victor.nkuna@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color: 'skyblue'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>
               


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

// < br />
// <hr />
// <form>
//   <label>
//     Enter your Name:
//     <input type="text" name="name" />
//     </label>
//     <input type="submit" value="Submit" />
// </form>
 
export default Contact;
