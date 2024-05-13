import React from 'react';
import Bnner from '../Component/Bnner';
import TabSection from '../Component/TabSection';
import HowItWork from '../Component/HowItWork';
import { Helmet } from 'react-helmet-async';
import FeatureCompany from '../Component/FeatureCompany';

const HomePage = () => {
  return (
    <div>
      <Bnner></Bnner>
      <TabSection></TabSection>
      <HowItWork></HowItWork>
      <FeatureCompany></FeatureCompany>
    </div>
  );
};

export default HomePage;
