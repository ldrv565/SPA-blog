import {GET_POST} from '../actions';

const reducer = (state = {}, action) => {
    if (action.type === GET_POST) {
        return action.post;
    }

    return state;
};

export default reducer;
