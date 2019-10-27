import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { initializeIcons } from '@uifabric/icons';
import Header from './header';

initializeIcons();

const theme = {
    mainThemeColor: 'rgb(75, 75, 75)',
    secondaryThemeColor: 'rgb(85, 85, 85)',
    mainFontColor: '#fff',
    secondaryFontColor: 'rgb(235, 235, 235)',
    thirdaryFontColor: 'rgb(220, 220, 220)',
    hoverThemeColor: 'rgb(90, 90, 90)',
    secondaryHoverThemeColor: 'rgb(110, 110, 110)',
    thirdaryThemeColor: 'rgb(100, 100, 100)',
    fontSize: '1.5rem'
}

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 1.4;
    }
`;

const Nav = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <Route to="/" component={null} />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Nav;