import Head from 'next/head';
import Header from '../../components/header/Header';
import TopNav from '../../components/top-nav/TopNav';

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Admin Login</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <Header />
      <TopNav />
    </>
  );
}
