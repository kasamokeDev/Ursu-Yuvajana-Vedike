import Head from "next/head";
import Header from "../../components/header/Header";
import TopNav from "../../components/top-nav/TopNav";
function getServerSideProps() {}
export default function About(props) {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | About</title>
      </Head>
      <Header />
      <TopNav />
      <p>hello about</p>
    </>
  );
}
