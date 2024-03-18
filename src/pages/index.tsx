import Head from 'next/head';
import '../app/globals.css';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="h-screen">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </main>
  );
}
