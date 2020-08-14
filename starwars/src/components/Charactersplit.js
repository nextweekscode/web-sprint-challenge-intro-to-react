import React  from 'react'
import Character from './Character'


export default function CharacterSplitter(props){
    const { character } = props

    return (
        <div className="characters-container-wrapper">
           {character.map(ch =>{
           return <Character key={props.name} 
            character={ch}
            />
        })} 
        </div>
      );
    };