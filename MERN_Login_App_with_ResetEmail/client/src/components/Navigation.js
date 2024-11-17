import React from 'react'

const Navigation = () => {
  return (
    <div className="nav-container">
      <p className="mb-4 pb-2"><i class='uil uil-chat-bubble-user'></i> </p>
      <a href="/">Home</a>
      <p className="mb-4 pb-2"><i class='uil uil-book-reader'></i> </p>
      <a href="./clean">Room Cleaning</a>
      <p className="mb-4 pb-2"><i class='uil uil-wifi-router'></i> </p>
      <a href="./wifi">Wifi Renewal</a>
      <p className="mb-4 pb-2"><i class='uil uil-outgoing-call'></i> </p>
      <a href="./emergency">Emergency</a>
      <p className="mb-4 pb-2"><i class='uil uil-book-reader'></i> </p>
      <a href="./register">Sign Up</a>
    </div>
  )
}

export default Navigation