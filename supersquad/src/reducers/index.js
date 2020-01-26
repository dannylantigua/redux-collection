import { combineReducers } from 'redux';

import characters from './characters-reducer';
import heroes from './heroes-reducer';

const rootReducer = combineReducers({
    characters,
    heroes
})

export default rootReducer;