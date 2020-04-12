import React from 'react';
import ReactDOM from 'react-dom';
import ThemeContext from './themeContext'

import App from './App';


ReactDOM.render(
    <ThemeContext.Provider value={'light'}>
        <App />
    </ThemeContext.Provider>, 
    document.getElementById('root'));


