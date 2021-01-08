import React from 'react';
import { Link } from 'react-router-dom';
import { Paragraph } from 'react-native-paper';

class Testimonials extends React.Component {
  render() {
  return (<header style={headerStyle}><h2>Testimonial</h2>
      <Link style={linkStyle} to="/testimonials">Testimonial</Link> | <Link style={linkStyle} to="/aboutme">About</Link> | <Link style={linkStyle} to="/contact">Contact</Link>
      </header>
 )
}


}

function Reviews (){
  // render() {
  
    return <p>I am victor</p>
  
}


const headerStyle = {
  background: ' skyblue',
  color: 'white',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}

// export default { Testimonials ,Reviews }; this is the ES6 method of exporting multiple JS Files as modules
export default Testimonials;

