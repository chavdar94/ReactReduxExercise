import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import { getAllCharacters } from './components/SWAPI/Characters/chracatersSlice.js';

async function main() {
    store.dispatch(getAllCharacters());

    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

main();
