import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QuoteBoxContainer from './components/QuoteBoxContainer';
import rootReducer from './redux/rootReducer';
import './index.css';


const NEW_QUOTE = 'NEW_QUOTE';
const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <QuoteBoxContainer />
    </Provider>,
    document.getElementById('root')
);

export { NEW_QUOTE };