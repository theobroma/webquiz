import { combineReducers } from 'redux';

import AnswersReducer from './answers-reducer';
import QuestionsReducer from './questions-reducer';
import ScoreReducer from './score-reducer';

const rootReducer = combineReducers({
  answer: AnswersReducer,
  question: QuestionsReducer,
  score: ScoreReducer
});

export default rootReducer;
