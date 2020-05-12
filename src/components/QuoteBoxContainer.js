import { connect } from 'react-redux';
import QuoteBox from './QuoteBox';
import { NEW_QUOTE } from "../actions";
import quotes from '../quotes';

const mapStateToProps = state => ({
    quote: state.quote,
    author: state.author,
    color: state.color,
    nextIndex: state.nextIndex,
});

const mapDispatchToProps = (dispatch) => ({
    getNewQuote: (nextIndex) => {dispatch(generateNewQuote(quotes, nextIndex))}
});

const QuoteBoxContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

function generateNewQuote(quotesArr, currentIndex) {
    return {
        type: NEW_QUOTE,
        quote: quotesArr[currentIndex].quote,
        author: quotesArr[currentIndex].author,
        color: quotesArr[currentIndex].color,
        nextIndex: currentIndex === quotesArr.length - 1 ? 0 : currentIndex + 1,
    };
};

export default QuoteBoxContainer;