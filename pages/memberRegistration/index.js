import Head from 'next/head';
import Header from '../../components/header/Header';
import RegistrationForm from '../../components/member-registration/RegistrationForm';
import TopNav from '../../components/top-nav/TopNav';

export default function MemberRegistration() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Member Registration</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <Header />
      <TopNav />
      <RegistrationForm />
    </>
  );
}
