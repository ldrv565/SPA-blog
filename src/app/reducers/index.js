import {combineReducers} from 'redux';

import fetching from './fetching';
import posts from './posts';
import post from './post';

const reducer = combineReducers({
    fetching,
    posts,
    post,
});

export default reducer;
