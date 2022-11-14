"use strict";

function Tweet({ username, name, date, message }) {
  const nameStyles = {
    color: "gray",
    fontWeight: 700
  }

  const messageStyles = {
    fontSize: 30,
    fontFamily: "Arial"
  }

  return <div className="tweet">
    <div style={nameStyles}>
      <span>{username} </span>
      <span>{name} </span>
     <span>{date}</span>
    </div>
    <p style={messageStyles}>{message}</p>
  </div>
}
