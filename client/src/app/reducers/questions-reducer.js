import { GET_QUESTIONS } from '../actions/get-questions';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS: {
      return action.payload.data;
    }
    default:
      return state;
  }
}
