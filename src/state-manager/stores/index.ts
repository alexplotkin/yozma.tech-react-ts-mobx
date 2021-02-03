import React from 'react';

/* stores */
import {TextStore} from './TextStore';

export const stores = Object.freeze({
    textStore: new TextStore(),
});

export const storesContext = React.createContext(stores);

export const StoresProvider = storesContext.Provider;
