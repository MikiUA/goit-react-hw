import React from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormWrapper } from './styles/FeedbackForm.styled';

function FeedbackForm({options,onLeaveFeedback}) {
  return (
    <FormWrapper>
        {options.map((option)=>(
          <FormButton key={option} 
            style={{border:'1px solid black'}} 
            onClick={()=>(onLeaveFeedback(option))}>
              {option}
          </FormButton>
        ))}

    </FormWrapper>
  )
}

FeedbackForm.propTypes = {
  options:PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback:PropTypes.func
}

export default FeedbackForm
