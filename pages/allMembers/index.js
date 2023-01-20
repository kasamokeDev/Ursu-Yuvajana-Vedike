import Head from 'next/head';
import TopNav from '../../components/top-nav/TopNav';
import Footer from '../../components/footer/Footer';
import UserListContainer from '../../components/user-list/UserListContainer';

export default function allMembers() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | All Members</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <UserListContainer title="All Members"/>
      <Footer />
    </>
  );
}
