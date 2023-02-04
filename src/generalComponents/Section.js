import React from 'react'
import PropTypes from 'prop-types'
import { SectionTitle, TaskContainer, TaskTitle, TaskWrapper } from './styles/Section.styled'

function Section({
    children=<></>,
    type='titled',
    title='',
    label='',
    titleSize=1}) 
  {
  title=title||label||'';//for a comfortable view you can pass either
  // const title = props.label||props.title||props.name||props.header;
  // const titleSize=props.titleSize||props.headerSize||2;//TODO: stylize different sizes, also edit proptypes
  
  //#region titled Section
  if (type==='titled'||type==='labeled'){
   return (
    <>
    <SectionTitle fontSize='40px'>{title}</SectionTitle>
    {children}
    </>
  )}
  //#endregion titled Section

  //#region task Section
  if (type==='task') return(
    <TaskContainer>
      <TaskTitle>{title}</TaskTitle>
      <TaskWrapper>
        {children}
      </TaskWrapper>
    </TaskContainer>
  )
  //#endregion task Section
  
  return //in case of type error in props.type
}

Section.propTypes = {
    children:PropTypes.node.isRequired,
    type:PropTypes.oneOf(['titled','labeled','task']),
    title:PropTypes.string
}

export default Section
