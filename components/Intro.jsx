import React from 'react';
import styled from 'styled-components';
import laptop from '../assets/images/png/laptop.png';
import cService from '../assets/images/svg/c-service.svg';
import support from '../assets/images/svg/support.svg';
import icon from '../assets/images/png/icon.png';

const IntroWrapper = styled.section`
  margin-top: -300px;
  background-color: #1b2a4e;
  text-align: center;

  img.laptop {
    position: relative;
    top: -50px;
    max-width: 100%;
    height: auto;
  }

  h1 {
    font-size: 45px;
    font-weight: 900;
    color: white;
  }

  div {
    span {
      font-size: 20px;
      color: #9cbbee;
      font-weight: 700;

      img {
        vertical-align: middle;
        margin-right: 9px;
      }
    }

    span:first-of-type {
      margin-right: 25px;
    }
  }

  img.dojah {
    margin-top: 24px;
    margin-bottom: 80px;
  }
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <img src={laptop} className="laptop" />
      <h1>
        Stay focused on the business, <br />
        while we handle the little things
      </h1>

      <div>
        <span>
          <img src={cService} alt="customer service" /> Great customer service
        </span>

        <span>
          <img src={support} alt="24/7 support" /> 24/7 Support
        </span>
      </div>

      <img src={icon} className="dojah" />
    </IntroWrapper>
  );
};

export default Intro;
