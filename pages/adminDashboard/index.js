import Head from 'next/head';
import RegistrationForm from '../../components/member-registration/RegistrationForm';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';

export default function MemberRegistration() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Admin Dashboard</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
    </>
  );
}
