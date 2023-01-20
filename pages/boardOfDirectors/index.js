import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';
import BODContainer from '../../components/board-of-directors/BODContainer';

export default function boardOfDirectors() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Board Of Directors</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <BODContainer />
      <Footer />
    </>
  );
}
