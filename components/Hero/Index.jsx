import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import heroBG from '../../assets/images/jpg/hero-bg.jpg';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';

const HeroWrapper = styled.section`
  background: url(${heroBG}) center no-repeat;
  background-size: cover;
  height: 900px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);

  .hero-content {
    text-align: center;
    margin-top: 80px;
    h1 {
      font-size: 58px;
      font-weight: 900;
      color: #1b2a4e;
    }
    p {
      color: #677189;
      font-size: 16px;
      margin-bottom: 30px;
      line-height: 1.5;
    }
    button:first-of-type {
      margin-right: 16px;
    }
    span {
      display: block;
      color: #677189;
      margin-top: 24px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Navigation />
      <div className="hero-content">
        <h1>
          Onboard users across
          <br /> Africa in seconds
        </h1>
        <p>
          Seamlessly identify and verify individuals and businesses
          <br /> via access to simple, easy-to-understand APIs
        </p>
        <PrimaryButton>Get started</PrimaryButton>
        <SecondaryButton>Schedule a demo</SecondaryButton>

        <span>
          <a>Visit our API Documentation</a>
        </span>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
