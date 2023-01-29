import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';

import ControlPanelDashboard from '../../components/controlPanel/ControlPanelDashboard';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Admin Control Panel</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <ControlPanelDashboard />
      <Footer />
    </>
  );
}
