import React from "react";
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { Statistics} from "components/Statistics/Static";


class feedbackOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          good: 0,
          neutral: 0,
          bad: 0
        };
      }
    
      handleFeedbackClick = (feedbackType) => {
        this.setState((prevState) => ({
          [feedbackType]: prevState[feedbackType] + 1
        }));
      }
    
      calculateTotal = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      }
    
      countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.calculateTotal();
        return total > 0 ? Math.round((good / total) * 100) : 0;
      }
    
      render() {
        console.log(this.state)
        const { good, neutral, bad } = this.state;
        const total = this.calculateTotal();
        const positivePercentage = this.countPositiveFeedbackPercentage();
    
        return (
          <div className={s.container}>
            <h2 className={s.title}>Feedback</h2>
            <button className ={s.button} onClick={() => this.handleFeedbackClick('good')}>
              Good
            </button>
            <button className ={s.button} onClick={() => this.handleFeedbackClick('neutral')}>
              Neutral
            </button>
            <button className ={s.button} onClick={() => this.handleFeedbackClick('bad')}>
              Bad
            </button>
            <Statistics
              good = {good}
              bad = {bad}
              neutral= {neutral}
              total = {total}
              positiveFeedback = {positivePercentage}
            
            >
            </Statistics>
          
            </div>
        );
      }
}
export default feedbackOptions;

feedbackOptions.propTypes = {
  state: PropTypes.shape={
    good: PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    regular : PropTypes.number.isRequired
  }
}


