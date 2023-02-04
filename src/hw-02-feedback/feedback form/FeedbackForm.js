import React from 'react'
import PropTypes from 'prop-types'
import { FormButton, FormWrapper } from './styles/FeedbackForm.styled';

function FeedbackForm({options,onLeaveFeedback}) {
    //const options=['good','bad','neutral']
    //onLeaveFeedback is a function that has setState inside it
    console.log(onLeaveFeedback);//оцей лог повинен викликатися один раз за кожний ререндер
    //TODO ask why this component rerenders every time i press a button
  return (
    <FormWrapper>
        {options.map((option)=>(
          <FormButton key={option} 
            style={{border:'1px solid black'}} 
            onClick={()=>(onLeaveFeedback(option))}>
            {/* onClick={(event)=>{event.preventDefault(); return (onLeaveFeedback(option))}}> //for button*/}
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
