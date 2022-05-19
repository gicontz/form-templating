import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { useApp } from './api/app/actions';
import AppProvider from './provider/app';
import themes from './styles/theme/themes';
import Main from './views/Main';
 
const Root: FunctionComponent = () => {
    const [store, dispatch] = useApp();
    return (
        <AppProvider.Provider value={{ store, dispatch }}>
            <ThemeProvider theme={themes.default}>
                <Main />
            </ThemeProvider>
        </AppProvider.Provider>
    )
};
 
export default Root;