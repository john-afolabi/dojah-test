import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import '../assets/styles/global.scss';

const theme = {
  primaryColor: '#3977DE',
  secondaryColor: '#EBF1FC',
  'h1-font-size': '48px',
  'h2-font-size': '45px',
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
