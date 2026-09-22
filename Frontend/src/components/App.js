import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from './HomePage';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4f46e5'
        },
        secondary: {
            main: '#14b8a6'
        },
        background: {
            default: '#f5f7ff'
        }
    },
    typography: {
        fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(',')
    },
    shape: {
        borderRadius: 16
    }
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <HomePage />
        </ThemeProvider>
    )
}

