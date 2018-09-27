import React, { Component } from 'react';
import ProgressBar from '../containers/ProgressBar';

import Question from '../containers/Question';
import Highlight from '../components/Highlight';
import Timer from '../components/Timer';
import TimerM from '../components/TimerM';
import CountDown from '../components/CountDown';

export default () => (
  <div>
    <p>This is the main page</p>
    {/* <TimerM countdown={42} /> */}
    <ProgressBar />
    <Highlight />
    <Question />
    <CountDown />
  </div>
);
