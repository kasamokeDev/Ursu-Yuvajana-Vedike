import Head from 'next/head';
import TopNav from '../../../components/top-nav/TopNav';
import Footer from '../../../components/footer/Footer';

import MembershipApprovalContainer from '../../../components/membership-approval/MembershipApprovalContainer';

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Ursu Yuvajana Vedike | Membership Approval</title>
        <meta property="og:title" content="Urus title" key="title" />
      </Head>
      <TopNav />
      <MembershipApprovalContainer />
      <Footer />
    </>
  );
}
