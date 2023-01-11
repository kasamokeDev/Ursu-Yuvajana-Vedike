import Head from 'next/head';
import HeroCarousel from '../components/hero-carousel/HeroCarousel';
import CardContainer from '../components/card-group/CardContainer';
import TopNav from '../components/top-nav/TopNav';
import SamplePhotoGallery from '../components/photo-gallery/samplePhotoGallery';
import Footer from '../components/footer/Footer';

function getServerSideProps() {}
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike</title>
      </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TopNav />
        <HeroCarousel />
        <CardContainer />
        <SamplePhotoGallery />
      </div>
    </>
  );
}
