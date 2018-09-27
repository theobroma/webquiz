/* eslint react/no-access-state-in-setstate:0 */
const React = require('react');
const ms = require('pretty-ms');

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0,
      budget: 10000
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    const { time, start } = this.state;
    this.setState({
      isOn: true,
      time,
      start: Date.now() - time
    });
    this.timer = setInterval(
      () => this.setState({
          time: Date.now() - start
        }),
      1
    );
  }

  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }

  render() {
    const start = this.state.time == 0
      ? <button onClick={this.startTimer}>start</button>
      : null;
    const stop = this.state.time == 0 || !this.state.isOn
      ? null
      : <button onClick={this.stopTimer}>stop</button>;
    const resume = this.state.time == 0 || this.state.isOn
      ? null
      : <button onClick={this.startTimer}>resume</button>;
    const reset = this.state.time == 0 || this.state.isOn
      ? null
      : <button onClick={this.resetTimer}>reset</button>;
    const remain = this.state.budget - parseInt(this.state.time, 10);

    return (
      <div>
        <h3>
          timer:
          {' '}
          {ms(remain)}
          <br />
          {this.state.time}
        </h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}
module.exports = Timer;
