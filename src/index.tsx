import React from 'react';
import ReactDOM from 'react-dom';

/* state-manager */
import {StoresProvider, stores} from './state-manager/stores';

/* components */
import App from './App';

/* styles */
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <StoresProvider value={stores}>
            <App />
        </StoresProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
