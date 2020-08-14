// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
 background-color: grey;
 width: 20%;
 @keyframes blink {
     0% {color:black; }
     25% {color:purple;}
     50% {color:black;}
     100% {color:purple;}
 }
h2 {
   animation-name: blink;
   animation-duration: 2s;
   animation-timing-function: ease-in-out;
   animation-iteration-count: infinite;
   
}`


export default function Character(props){
    const {character} = props

    return (
        <StyledDiv className="characters">
            <h2>{character.name}</h2>
            <h2>Height:{character.height}</h2>
        </StyledDiv>
    )

}