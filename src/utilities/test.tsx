import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/theme/themes';

export const withTheme = (children: ReactNode) => {
    return (
        <ThemeProvider theme={themes.default}>
            {children}
        </ThemeProvider>
    )
};