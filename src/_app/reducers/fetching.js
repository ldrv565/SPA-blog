import {REQUEST_POSTS, GET_POSTS, GET_POST} from '../actions';

const reducer = (state = false, action) => {
    if (action.type === REQUEST_POSTS) {
        return true;
    }

    if (action.type === GET_POSTS) {
        return false;
    }

    if (action.type === GET_POST) {
        return false;
    }

    return state;
};

export default reducer;
