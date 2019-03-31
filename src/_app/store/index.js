import {createStore} from 'redux';

import reducer from '../reducers';

function addPromiseSupport(store) {
    const {dispatch} = store;

    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(dispatch);
        }

        return dispatch(action);
    };
}

const store = createStore(reducer);

store.dispatch = addPromiseSupport(store);

export default store;
