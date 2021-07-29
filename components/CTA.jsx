import React from 'react';
import styled from 'styled-components';
import laptopReady from '../assets/images/png/laptop-ready.png';
import laptopDocumentation from '../assets/images/png/laptop-documentation.png';
import WhiteButton from './Buttons/WhiteButton';
import TransparentButton from './Buttons/TransparentButton';
import ArrowIMG from '../assets/images/svg/arrow.svg';

const CTAWrapper1 = styled.section`
  background-color: ${(props) => props.theme.primaryColor};
  padding-top: 80px;
  color: white;

  .container {
    display: flex;
    justify-content: space-between;
    div {
      h2 {
        font-size: 30px;
      }
      p {
        line-height: 1.8;
      }

      button:first-of-type {
        margin-right: 16px;
      }
    }
    img {
      max-width: 749px;
      height: auto;
    }
  }
`;

const CTAWrapper2 = styled.section`
  background-color: #1b2a4e;
  padding-top: 80px;
  color: white;

  .container {
    display: flex;
    justify-content: space-between;
    div {
      h2 {
        font-size: 30px;
      }
      p {
        line-height: 1.8;
      }

      button:first-of-type {
        margin-right: 16px;
      }
    }
    img {
      max-width: 767px;
      height: auto;
    }

    a {
      color: #9cbbee;
      svg {
        vertical-align: middle;
        margin-right: 6px;
      }
    }
  }
`;

const CTA = () => {
  return (
    <>
      <CTAWrapper1>
        <div className="container">
          <div>
            <h2>
              You want to build? We are ready to build <br /> with you, we are
              just an api call away.
            </h2>
            <p>
              Dojah is faster, easier, and you are still in complete control{' '}
              <br />
              Sign up now and get ₦500 credit
            </p>

            <WhiteButton arrow>Get Started</WhiteButton>
            <TransparentButton>Schedule a demo</TransparentButton>
          </div>
          <img src={laptopReady} />
        </div>
      </CTAWrapper1>

      <CTAWrapper2>
        <div className="container">
          <img src={laptopDocumentation} />
          <div>
            <h2>
              Go through the API
              <br /> Documentation to properly
              <br /> understand what Dojah is, you <br />
              can then schedule a demo call.
            </h2>

            <a href="#">
              Visit our API Documentation <ArrowIMG />
            </a>
          </div>
        </div>
      </CTAWrapper2>
    </>
  );
};

export default CTA;
