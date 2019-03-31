import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import {AppLayout} from './components/App';
import {requestPosts, getPosts} from './actions';

store.dispatch(requestPosts());
store.dispatch(getPosts());

ReactDOM.render(
    <Provider store={store}>
        <AppLayout />
    </Provider>,
    document.getElementById('root'),
);
