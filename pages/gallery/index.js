import Head from 'next/head';
import MainPhotoGallery from '../../components/photo-gallery/MainPhotoGallery';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Gallery</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <MainPhotoGallery />
      <Footer />
    </>
  );
}
