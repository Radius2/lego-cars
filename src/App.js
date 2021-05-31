import React, {useState} from 'react';
import Header from './components/Header';
import {ThemeProvider} from 'styled-components';

const initTheme = {
    borderRadius: 6,
    spacing: (n)=>n*10,
    color: {
        primary: {
            main: '#003469',
            dark: '#194878',
            light: '#00AAD2',
            text: '#fff'
        },
        secondary: {
            main: '#194878',
            text: '#fff'
        },
        base: {
            main: '#F6F3F2',
            text: '#1B1B1B'
        },

    }
}

function App() {
    const [theme, setTheme] = useState(initTheme)
    return (
        <ThemeProvider theme={theme}>
            <Header/>
        </ThemeProvider>
    );
}

export default App;
