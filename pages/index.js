import Head from 'next/head';
import HeroCarousel from '../components/hero-carousel/HeroCarousel';
import CardContainer from '../components/card-group/CardContainer';
import TopBar from '../components/top-bar/TopBar';
import TopNav from '../components/top-nav/TopNav';
import SamplePhotoGallery from '../components/photo-gallery/SamplePhotoGallery';
import MessageContainer from '../components/message/MessageContainer';
import EventsContainer from '../components/events-container/EventsContainer';
import Footer from '../components/footer/Footer';

import data from '../staticData/MockData';

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
        <TopBar />
        <TopNav />
        <HeroCarousel />
        <CardContainer title="Our Moto" data={data} />
        <SamplePhotoGallery />
        <MessageContainer />
        <EventsContainer />
        <Footer />
      </div>
    </>
  );
}
