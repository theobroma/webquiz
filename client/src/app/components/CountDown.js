import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

class CountDown extends Component {
  completeHandler = (e) => {
    console.log('completeHandler');
  };

  render() {
    return (
      <Countdown date={Date.now() + 60000} onComplete={this.completeHandler} />
    );
  }
}

// const CountDown = () => <Countdown date={Date.now() + 10000} onComplete=  />;

export default CountDown;
