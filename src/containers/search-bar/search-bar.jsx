import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  changeMax,
  changeMin,
  fetchNumber,
} from '../../redux/actions';

import {
  Form,
} from '../../components/organisms';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onMinChange(e) {
    this.props.changeMin(e.target.value)
  }

  onMaxChange(e) {
    this.props.changeMax(e.target.value)
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.fetchNumber(this.props.range);
  }

  render() {
    const {
      range,
    } = this.props;

    return (
      <Form
        max={range.max}
        min={range.min}
        onMaxChange={this.onMaxChange}
        onMinChange={this.onMinChange}
        onSubmit={this.onSubmit}
      />
    )
  }
};

export const mapStateToProps = ({ range }) => {
  return { range };
}

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { 
      changeMax,
      changeMin,
      fetchNumber,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);