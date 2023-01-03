import Head from 'next/head';
import Header from '../../components/header/Header';
function getServerSideProps() {}
export default function About(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | About</title>
      </Head>
        <Header />
    </>
  );
}
