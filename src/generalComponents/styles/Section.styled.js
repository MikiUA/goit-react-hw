import styled from 'styled-components'

export const SectionTitle = styled.div`
    font-size:${props=>props.fontSize||'40px'};
    margin:40px 0 20px;
    font-weight:bold;
    text-align:center;

`

export const TaskContainer = styled.div`
    min-width:fit-content;
    border: 1px solid black;
    margin:30px;
    background-color: #eaeff3;
`
export const TaskTitle = styled.div`
    border-bottom: 1px solid black;
    text-align:center;
`
export const TaskWrapper=styled.div`
    padding:25px;  
`