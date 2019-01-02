import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import counterReducer from './counterReducer';

import * as serviceWorker from './serviceWorker';

const store = createStore (counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);













ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();