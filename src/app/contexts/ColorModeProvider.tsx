import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { green, grey, teal } from '@mui/material/colors';
import { createContext, FC, PropsWithChildren, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../../utils/hooks/useStorage';

interface Props {
    mode: PaletteMode;
    toggleMode: () => void;
}

const initialState: Props = {
    mode: 'dark',
    toggleMode: () => {},
};

export const ColorModeContext = createContext(initialState);

export const ColorModeContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [darkModeOn, setDarkMode] = useLocalStorage<PaletteMode>('mode', 'dark');

    const value = useMemo(() => {
        return {
            mode: darkModeOn,
            toggleMode: () => setDarkMode(darkModeOn === 'dark' ? 'light' : 'dark'),
        };
    }, [darkModeOn, setDarkMode]);

    const getDesignTokens = useCallback(
        (mode: PaletteMode) => ({
            palette: {
                mode,
                ...(mode === 'light'
                    ? {
                          // palette values for light mode
                          primary: green,
                          divider: green[200],
                          text: {
                              primary: grey[900],
                              secondary: grey[800],
                          },
                      }
                    : {
                          // palette values for dark mode
                          primary: teal,
                          divider: teal[700],
                          background: {
                              default: teal[900],
                              paper: teal[900],
                          },
                          text: {
                              primary: '#fff',
                              secondary: grey[500],
                          },
                      }),
            },
        }),
        []
    );

    const theme = useMemo(() => {
        return createTheme(getDesignTokens(darkModeOn));
    }, [darkModeOn, getDesignTokens]);

    return (
        <ColorModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />

                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};
