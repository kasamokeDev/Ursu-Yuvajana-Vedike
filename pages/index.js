import Head from 'next/head';
import Header from '../components/header/Header';
import HeroCarousel from '../components/hero-carousel/HeroCarousel';
import TopNav from '../components/top-nav/TopNav';
import Footer from '../components/footer/Footer';

function getServerSideProps() {}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike</title>
      </Head>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Header />
      <TopNav />
      <HeroCarousel />
      <Footer/>
      </div>
    </>
  );
}
