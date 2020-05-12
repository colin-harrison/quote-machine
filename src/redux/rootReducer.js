import { NEW_QUOTE } from '../actions';
import quotes from '../quotes';

const initialState = Object.assign({}, quotes[0], { nextIndex: 1 });
const rootReducer = (state = initialState, action) => {
    switch(action.type) {

        case NEW_QUOTE:
            return Object.assign({}, state, 
                {
                    quote: action.quote, 
                    author: action.author,
                    color: action.color,
                    nextIndex: action.nextIndex,
                }
            );

        default:
            return state;
    }
}

export default rootReducer;