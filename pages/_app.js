import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import '../assets/styles/global.scss';

const theme = {
  primaryColor: '#3977DE',
  secondaryColor: '#EBF1FC',
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
