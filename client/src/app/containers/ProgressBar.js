import { connect } from 'react-redux';
import React from 'react';

import ProgressBar from '../components/ProgressBar';

const mapStateToProps = state => ({
  score: state.score
});

// const mapDispatchToProps = dispatch => ({
//   getUsers: () => dispatch (getUsers ()),
// });

export default connect(mapStateToProps, {})(ProgressBar);
