import '../styles/globals.css';
import Sidenav from '../components/Sidenav';

function MyApp({ Component, pageProps }) {
  return (
    <Sidenav>
      <Component {...pageProps} />
    </Sidenav>
  );
};

export default MyApp
