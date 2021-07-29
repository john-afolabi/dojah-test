import Head from 'next/head';
import Hero from '../components/Hero/Index';
import Intro from '../components/Intro';
import Clients from '../components/Clients';
import KYC from '../components/KYC';
import KYB from '../components/KYB';
import FinancialIdentity from '../components/FinancialIdentity';
import CTA from '../components/CTA';
import Footer from '../components/Footer/Index';
import CaseStudies from '../components/CaseStudies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dojah - Identification and verification across Africa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero /> <Intro /> <Clients /> <KYC /> <KYB /> <FinancialIdentity />
      <CTA /> <CaseStudies /> <Footer />
    </>
  );
}
