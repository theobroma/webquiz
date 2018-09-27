import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/solarized-light.css';

import QUIZ_DATA from '../helpers/JS_Quiz_Data.json';

const Question = () => (
  <div>
    {QUIZ_DATA.map((item) => {
      console.log();
      return (
        <Highlight languages={['javascript']}>
          {item.code}
        </Highlight>
      );
    })}
  </div>
);

export default Question;
