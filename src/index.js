import React from 'react';
import { render } from 'react-dom';
import { Provider} from 'react-redux'
import configureStore from './configureStore';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

const target = document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    target
);

registerServiceWorker();


if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>,
            target
        )
    });
}