import React from 'react';
import styled from 'styled-components';
import build from '../../assets/images/jpg/build.jpg';
import WhiteButton from '../Buttons/WhiteButton';
import TransparentButton from '../Buttons/TransparentButton';

const FooterCTAWrapper = styled.section`
  background: linear-gradient(
      90deg,
      rgba(22, 73, 159, 1) 0%,
      rgba(22, 73, 159, 0.7) 40%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${build}) top no-repeat;
  background-size: cover;
  height: 415px;

  div {
    padding: 100px 0;
    h2 {
      color: white;
      font-size: 30px;
      margin-bottom: 40px;
    }

    button:first-of-type {
      margin-right: 16px;
    }
  }
`;
const FooterCTA = () => {
  return (
    <FooterCTAWrapper>
      <div className="container">
        <h2>
          You want to build? We are ready <br />
          to build with you, we are just an <br />
          api call away.
        </h2>

        <WhiteButton arrow>Get started</WhiteButton>
        <TransparentButton>Schedule a demo</TransparentButton>
      </div>
    </FooterCTAWrapper>
  );
};

export default FooterCTA;
