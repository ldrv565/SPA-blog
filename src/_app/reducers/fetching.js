import {REQUEST_POSTS, GET_POSTS} from '../actions';

const reducer = (state = false, action) => {
    if (action.type === REQUEST_POSTS) {
        return true;
    }

    if (action.type === GET_POSTS) {
        return false;
    }

    return state;
};

export default reducer;
