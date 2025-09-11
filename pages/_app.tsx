import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
