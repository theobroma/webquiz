import axios from 'axios';

export const CHECK_ANSWER = 'CHECK_ANSWER';

const URL = 'https://vtwd20wsbe.execute-api.eu-west-2.amazonaws.com/dev/answer';

export function checkAnswer(country, city) {
  console.log('checkAnswer action');
  const request = axios
    .post(URL, { country, city })
    .catch (err => console.log (`ERROR GETTING QUESTION: ${err}`)); // eslint-disable-line

  return {
    type: CHECK_ANSWER,
    payload: request
  };
}
