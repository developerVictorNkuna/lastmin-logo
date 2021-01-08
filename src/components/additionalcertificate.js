import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AdditionalCertificate extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={4}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <p>{this.props.Description}</p>
        </Cell>
        <Cell col={4}>
          <p>{this.props.Name}</p>
        </Cell>
        <Cell col={4}>
          <p>{this.props.IssuingOrganization}</p>
        </Cell>
        <Cell col={3}>
          <p>{this.props.startYear}</p>
        </Cell>
        <Cell col={2}>
          <p>{this.props.endYear}</p>
        </Cell>
        <Cell col={2}>
          <p>{this.props.Credential}</p>
        </Cell>
      </Grid>
    )
  }
}

export default AdditionalCertificate;
