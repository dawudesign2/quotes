import React from "react";

const QuoteCard = (props) =>  {
    const {quote, character, image} = props;

    return (
        <figure className="SimpsonQuote">
            <img src={image} alt={character} /> 
            <figcaption>
                <blockquote>{quote}</blockquote>
                <cite>{character}</cite>
            </figcaption>
        </figure>
    );

}


export default QuoteCard;