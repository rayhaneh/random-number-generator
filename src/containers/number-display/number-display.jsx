import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NumberDisplay extends Component {
  render() {
    const {
      number
    } = this.props;

    return(      
      <p className={'f1 pa2 blue'}>
        {number}
      </p>
    )
  }
}

export const mapStateToProps = ({ number }) => {
  return { number };
}

export default connect(mapStateToProps)(NumberDisplay);