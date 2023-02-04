import React from 'react'
import PropTypes from 'prop-types'
import Notification from 'generalComponents/Notification';
import { DisplayWrapper, PositiveColoring } from './styles/FeedbackDisplay.styled';
// import Notification from '../../generalComponents/Notification';

function FeedbackStats({good,bad,neutral}) {
    let total=calcTotal(good,bad,neutral);
    if (!total) return <Notification message='No Feedback recieved'/>
    let positivePercent=calcPositivePercent(total,good);
    
  return (
    <DisplayWrapper>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li> 
      <li>bad: {bad}</li>
      <br/>
      <li>total: {total}</li>
      <li><PositiveColoring positive={positivePercent}>positive: {positivePercent}%</PositiveColoring></li>
    </DisplayWrapper>
  )
}

FeedbackStats.propTypes = {
  good:PropTypes.number,
  neutral:PropTypes.number,
  bad:PropTypes.number,
}

function calcTotal(good,neut,bad){return (good+neut+bad);}
function calcPositivePercent(totalItems,positiveItems) {return Math.round((positiveItems/totalItems).toFixed(2)*100);}

export default FeedbackStats