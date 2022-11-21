import React from 'react'
import ButtonCard from './ButtonCard'

const QuoteBox = ({ quoteRamdom, handleClick, color }) => {


    return (
        <article className='card' >
            <i className="fa-solid fa-quote-left card-icon"></i>
            <p className='card-quote'> {quoteRamdom.quote} </p>
            <h1 className='card-author'> {quoteRamdom.author} </h1>
            <ButtonCard 
            handleClick={handleClick}
            color={color}
            />
        </article>
    )
}

export default QuoteBox