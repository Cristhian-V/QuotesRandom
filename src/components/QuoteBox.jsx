import React from 'react'

const QuoteBox = ({ quoteRamdom, handleClick, color }) => {

    const objStyle = {
        backgroundColor: color
    }


    return (
        <article className='card' >
            <i className="fa-solid fa-quote-left card-icon"></i>
            <p className='card-quote'> {quoteRamdom.quote} </p>
            <h1 className='card-author'> {quoteRamdom.author} </h1>
            <button onClick={handleClick} className='card-btn' style={objStyle}> &gt; </button>
        </article>
    )
}

export default QuoteBox