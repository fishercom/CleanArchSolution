import '../styles/globals.css'
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext'; // Import AuthProvider

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp
