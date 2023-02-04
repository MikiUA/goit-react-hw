const { default: styled } = require("styled-components");

export const DisplayWrapper=styled.ul`
margin-left:10%;
`

export const PositiveColoring = styled.div`
    width:fit-content;
    border:3px solid;
    background-color:rgb(${props=>255-props.positive/100*255},${props=>props.positive/100*255},50);
    border-color:rgb(${props=>205-props.positive/100*225},${props=>props.positive/100*205},0);
`