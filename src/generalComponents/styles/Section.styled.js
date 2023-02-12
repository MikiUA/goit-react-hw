import styled from 'styled-components'

export const SectionContainer = styled.div`
    margin: 30px 0 10px;
    padding: 10px;

    &:hover{
        background-color:#f7fdff;
    }
`
export const SectionTitle = styled.div`
    font-size:${props=>props.fontSize||'40px'};
    margin:0 0 20px;
    font-weight:bold;
    text-align:center;
    height:100%;
`

export const TaskContainer = styled.div`
    width:fit-content;
    border: 1px solid black;
    margin:30px;
    background-color: #f0faff;
`
export const TaskTitle = styled.div`
    border-bottom: 1px solid black;
    text-align:center;
`
export const TaskWrapper=styled.div`
    padding:20px;  
`