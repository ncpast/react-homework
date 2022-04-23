import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, Subscribe } from './assets/msg';
import state from './assets/msg';

const render = () => {
    ReactDOM.render( <
        App state = { state }
        addPost = { addPost }
        />,
        document.getElementById('root')
    );
}

render();

Subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();