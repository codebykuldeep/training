import React, { useState } from "react";

export default function Player({ name: intialName, symbol,isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [player, setPlayer] = useState(intialName);

  const handleEditClick = () => {
    // setIsEditing(!isEditing);  bad practice as react schedules update for a later time donot update immedaitely
    setIsEditing((editing) => !editing);
  };

  function handleChange(event) {
    setPlayer(event.target.value);
  }

  let playerName = <span className="player-name">{player}</span>;

  if (isEditing === true) {
    playerName = (
      <input
        type="text"
        defaultValue={player}
        onChange={handleChange}
        required
      />
    );
  }


  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
