import { UPDATE_SCORE } from '../actions/update-score';

export default function (
  state = { score: 0, justUpdated: false, progress: 1 },
  action
) {
  switch (action.type) {
    case UPDATE_SCORE: {
      let newScore = action.payload.score;
      if (action.payload.justUpdated === true) {
        newScore = action.payload.score + 1;
      }
      return {
        ...state,
        score: newScore,
        justUpdated: true
      };
    }
    default: {
      return {
        ...state,
        score: state.score,
        justUpdated: false
      };
    }
  }
}
