import React from 'react';
import { usePDF } from 'react-to-pdf';
import Bnner from '../Component/Bnner';
import TabSection from '../Component/TabSection';
import HowItWork from '../Component/HowItWork';
import { Helmet } from 'react-helmet-async';
import FeatureCompany from '../Component/FeatureCompany';

const HomePage = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  return (
    <div>
      {/* <div>
        <button onClick={() => toPDF()}>Download PDF</button>
        <div ref={targetRef}>Content to be generated to PDF</div>
      </div> */}
      <Bnner></Bnner>
      <TabSection></TabSection>
      <HowItWork></HowItWork>
      <FeatureCompany></FeatureCompany>
    </div>
  );
};

export default HomePage;
