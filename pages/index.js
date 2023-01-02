import Head from 'next/head';
import Header from '../components/header/Header';
import HeroCarousel from '../components/hero-carousel/HeroCarousel';
import TopNav from '../components/top-nav/TopNav';

function getServerSideProps() {}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike</title>
      </Head>
      <Header />
      <TopNav />
      <HeroCarousel />
    </>
  );
}
