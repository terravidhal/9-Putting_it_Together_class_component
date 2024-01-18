import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BirthdayButton.css';




export default class BirthdayButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { ageIncrem,increm, firstName, lastName, } = this.props;
    return (
      <div className="BirthdayButton">
        <button  onClick={ageIncrem}>Birthday Button for {firstName+" "+lastName} (+{increm})</button>
      </div>
    );
  }
}


BirthdayButton.propTypes = {};

BirthdayButton.defaultProps = {};

