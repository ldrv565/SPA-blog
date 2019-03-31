import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import AppConnector from './connectors/AppConnector';

ReactDOM.render(
    <Provider store={store}>
        <AppConnector />
    </Provider>,
    document.getElementById('root'),
);
