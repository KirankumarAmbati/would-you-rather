import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers/index'
import middleWare from './middlewares'

const store = createStore(rootReducer, middleWare)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
