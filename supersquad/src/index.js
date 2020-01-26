import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = createStore(rootReducer);
// Shows the store data / state
console.log('store.getState()', store.getState());
// Shows every time the store gets updated
store.subscribe(() => console.log('store', store.getState()));
// Gets the record on memory from the list (removes it and store it here)
store.dispatch(addCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));