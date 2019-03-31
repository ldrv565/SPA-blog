import {GET_POSTS} from '../actions';

const reducer = (state = [], action) => {
    if (action.type === GET_POSTS) {
        return action.posts;
    }

    return state;
};

export default reducer;
