import React, { useEffect } from 'react';

const QuoteBox = (props) => {
    useEffect(() => {
        document.body.className = props.color + 'Background';
    });

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center" style={{height: '100vh'}}>
                <div className={props.color + "Text col-12 col-sm-8 col-md-6"} id="quote-box">
                    <h2 id="text">"{props.quote}</h2>
                    <p id="author">- {props.author}</p>

                    {/* put the button in a flexbox row with the twitter button on the left */}
                    <div className="flex-container">
                        <a 
                            id="tweet-quote"
                            href={"https://twitter.com/intent/tweet?hashtags=quotes&text=" + props.quote + " - " + props.author}>
                            <img src="twitterIcon.svg" alt="Tweet" height="40"></img>
                        </a>
                        <button 
                            id="new-quote" 
                            onClick={() => props.getNewQuote(props.nextIndex)}
                            className={props.color + "Background"}>
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuoteBox;