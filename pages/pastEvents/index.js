import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';

export default function PastEvents() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Past Events</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <Footer />
    </>
  );
}
