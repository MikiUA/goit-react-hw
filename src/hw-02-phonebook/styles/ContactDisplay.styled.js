import styled from "styled-components";

export const ContactList = styled.ul`
width:fit-content;
padding-right:1em;
height:20em;
border-left:1px solid black;
overflow-y:auto;
`
export const ContactItem = styled.li`
margin-top:2%;
bordewr-left:1px solid black;
padding-left:0.2em
`

export const DeleteBtn = styled.div`
    display:block;
    text-align:center;
    background-color:#dcaaaa;
    font-size:35%;
    border-radius:10em;
    
    &:hover{
        background-color:#ee4444;
        border: 1px solid #aa0000
    }
`