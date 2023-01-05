import '../styles/globals.css';
import { ThemeProvider, CssBaseline, StyledEngineProvider } from '@mui/material';

import { theme } from '../theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
