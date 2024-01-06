import { useState } from "react";

export default function Player ({initialName,symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleChange(event){
        setPlayerName(event.target.value)
        console.log(event)
    }
    function handleEditing(){
        // setIsEditing(true)
        // setIsEditing(isEditing ? false : true)
        // setIsEditing(!isEditing)
        setIsEditing((editing) => !editing)

        if(isEditing){
            onChangeName(symbol,playerName)
        }
        
    }

    let editablePlayerName =   <span className="player-name">{playerName}</span>

    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    }

    return(
    
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <spna className="player-symbol">{symbol}</spna>
            </span>
            <button onClick={handleEditing}>{isEditing ? "Save":"Edit" }</button>
        </li>
       
          
    )
}