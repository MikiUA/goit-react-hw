import React, { useState } from 'react'
import Section from 'generalComponents/Section';
import FeedbackForm from './feedback form/FeedbackForm';
import FeedbackStats from './feedback form/FeedbackStats';

const initialOptions={'good':0,'neutral':0,'bad':0};
const availibleOptions=['good','neutral','bad'];
//some translation of object into availible options is required, currently this program will break if these 2 don't match

const App = () => {
  const [feedbackStats,setFeedbackStats]=useState(initialOptions);

  function onLeaveFeedback(option){//
    setFeedbackStats(prevState=>({
      ...prevState,
      [option]:(prevState[option]+1)
    }));
  }


  return (
    <Section type='task' title='Віджет відгуків'>
      <Section label='Please leave feedback'>
        <FeedbackForm options={availibleOptions} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      <Section label='Feedback statistics'>
        <FeedbackStats good={feedbackStats.good} bad={feedbackStats.bad} neutral={feedbackStats.neutral} />
      </Section>
    </Section>
  );
};

export default App