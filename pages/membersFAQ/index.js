import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';
import FAQ from '../../components/member-faq/FAQ';

export default function membersFAQ() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Members FAQ</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <FAQ />
      <Footer />
    </>
  );
}
