import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import AboutContainer from '../../components/about/AboutContainer';

import Footer from '../../components/footer/Footer';
function getServerSideProps() {}
export default function About(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | About</title>
      </Head>
      <TopNav />
      <AboutContainer />
      <Footer />
    </>
  );
}
