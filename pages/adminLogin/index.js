import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';

import AdminLoginContainer from '../../components/admin-login/AdminLoginContainer';

import Footer from '../../components/footer/Footer';

export default function AdminLogin() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Admin Login</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <AdminLoginContainer />
      <Footer />
    </>
  );
}
