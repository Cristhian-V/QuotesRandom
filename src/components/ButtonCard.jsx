import React from 'react'

const ButtonCard = ({handleClick,color}) => {
    const objStyle = {
        backgroundColor: color
    }

  return (
    <button onClick={handleClick} className='card-btn' style={objStyle}> &gt; </button>
  )
}

export default ButtonCard