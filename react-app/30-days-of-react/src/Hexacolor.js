import React from 'react';

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

function HexaColor() {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: '2px solid black',
    background: bgColor
  }
  return (
      <div style={styles}>
        <h2>{bgColor}</h2>
      </div>
  )
}


export default HexaColor;
