import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';
import AboutContainer from '../../components/about/AboutContainer';

export default function Vision() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Our Vision</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <AboutContainer />
      <Footer />
    </>
  );
}
