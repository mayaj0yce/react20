import React from 'react'
// import "./style.css"

const style = {
  footer1: {
    textAlign: "center",
    width: "100",
    background: "olive",
  color: "black",
  position: "absolute",
  bottom: '0',

  // padding: '0',
  }
}

const Footer = () => {
  return (
    <div class='footer' style={style.footer1}>

      Git Hub Link 

      Portfolio 

      Etc.
      
      </div>
  )
}

export default Footer