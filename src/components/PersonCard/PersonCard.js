import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PersonCard.css";
import BirthdayButton from "../BirthdayButton/BirthdayButton";



export default class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {increm : 0};
  }

  ageIncrem () {
    this.setState({increm : this.state.increm + 1});
  }

  render() {
    const { firstName, lastName, age, hairColor } = this.props;
    //console.log(this.state.increm);
    return (
      <div className="PersonCard">
      <h2>{ firstName }, { lastName }</h2>
       <p>Age : { age + this.state.increm }</p>
       <p>Hair Color : { hairColor }</p>
       <BirthdayButton increm={this.state.increm} ageIncrem = {this.ageIncrem.bind(this)}  firstName={firstName} lastName={lastName} />
    </div>
    );
  }
}


PersonCard.propTypes = {};

PersonCard.defaultProps = {};

