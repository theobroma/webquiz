import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { checkAnswer } from '../actions/check-answer';
import { getQuestions } from '../actions/get-questions';
import { updateScore } from '../actions/update-score';

class Question extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  componentDidUpdate() {
    if (
      this.props.answer.correct === true
      && this.props.score.justUpdated === false
    ) {
      this.props.updateScore({
        score: this.props.score.score,
        justUpdated: true
      });
    }
  }

  clickHandler = (e) => {
    const { score, answer, question } = this.props;
    // Option from list is clicked - other checks are to stop
    // user from cheating by clicking correct answer after reveal.
    console.log(e.target.id);
    if (score.justUpdated === false && answer.correct !== false) {
      const currentCountry = question.country;
      this.props.checkAnswer(currentCountry, e.target.id);
    }
  };

  submitHandler = (e) => {
    this.props.getQuestions();
    this.props.updateScore({
      score: this.props.score.score,
      justUpdated: false
    });
  };

  RenderAnswers = () => {
    const { question: { answers } = {}, answer } = this.props;

    if (answers) {
      return answers.map((city) => {
        let questionStatus = '';
        if (answer.userAnswer === city) {
          if (answer.correct) {
            questionStatus = 'correct';
          } else {
            questionStatus = 'incorrect';
          }
        } else if (answer.correctAnswer === city) {
          questionStatus = 'correct';
        }
        return (
          <li
            key={city}
            id={city}
            className={`answer ${questionStatus}`}
            onClick={this.clickHandler}
          >
            {city}
          </li>
        );
      });
    }
    return '';
  };

  RenderResponse = () => {
    const { answer: { correct } = {} } = this.props;
    if (correct === true) {
      return 'CORRECT!';
    }
    if (correct === false) {
      return 'INCORRECT!';
    }
    return '';
  };

  render() {
    const { question, score } = this.props;
    return (
      <div className="main">
        <h2>
          What is the capital of
          {' '}
          {question.country}
          ?
        </h2>
        <h3>Select the answer from the list below:</h3>
        <ul>{this.RenderAnswers()}</ul>
        <p className="response">
          Score:
          {' '}
          {score.score}
          {' '}
          {this.RenderResponse()}
        </p>
        <button onClick={this.submitHandler}>New Question</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question,
  score: state.score,
  answer: state.answer
});

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getQuestions()),
  checkAnswer: (country, city) => dispatch(checkAnswer(country, city)),
  updateScore: score => dispatch(updateScore(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
