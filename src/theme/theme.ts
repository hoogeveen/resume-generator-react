export interface Theme {
    primary: string;
    background: string;
    pageBackground: string;
    text: string;
    secondaryText: string;
    border: string;
    link: string;
    projectLink: string;
    projectText: string;
    errorBackground: string;
    errorText: string;
    errorBorder: string;
    errorDetails: string;
}

export const lightTheme: Theme = {
    primary: '#329CB9',
    background: '#FEFEFE',
    pageBackground: '#329CB9',
    text: '#303030',
    secondaryText: '#858585',
    border: '#EBEBEB',
    link: '#329CB9',
    projectLink: '#0366d6',
    projectText: '#586069',
    errorBackground: '#fef2f2',
    errorText: '#dc2626',
    errorBorder: '#fecaca',
    errorDetails: '#7f1d1d',
};

export const darkTheme: Theme = {
    primary: '#4DB8D9',
    background: '#1a1a1a',
    pageBackground: '#1a2a33',
    text: '#e0e0e0',
    secondaryText: '#a0a0a0',
    border: '#3a3a3a',
    link: '#4DB8D9',
    projectLink: '#4DB8D9',
    projectText: '#a0a0a0',
    errorBackground: '#2a1a1a',
    errorText: '#ff6b6b',
    errorBorder: '#4a2a2a',
    errorDetails: '#ff9999',
};

