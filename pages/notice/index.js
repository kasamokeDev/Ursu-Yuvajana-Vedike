import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';

export default function Notice() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Notice Board</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <Footer />
    </>
  );
}
