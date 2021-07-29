import React from 'react';
import FooterCTA from './CTA';
import styled from 'styled-components';
import icon from '../../assets/images/png/icon.png';
import Phone from '../../assets/images/svg/phone.svg';
import Mail from '../../assets/images/svg/mail.svg';
import Twitter from '../../assets/images/svg/twitter.svg';
import Slack from '../../assets/images/svg/slack.svg';
import Instagram from '../../assets/images/svg/instagram.svg';
import Facebook from '../../assets/images/svg/facebook.svg';

const FooterWrapper = styled.footer`
  background-color: #1b2a4e;
  padding: 100px 0;
  color: #9cbbee;

  div.links {
    display: flex;
    justify-content: space-between;

    div {
      h3 {
        color: #5a8ee3;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
        font-size: 14px;
        line-height: 3.2;
      }
    }
  }

  div.about {
    display: flex;
    align-items: center;
    padding: 30px 0;

    span.contact {
      padding: 0 26px;
      span:first-of-type {
        margin-right: 25px;
      }
      svg {
        margin-right: 6px;
      }
    }

    span.socials {
      svg {
        margin: 0 10px;
      }
    }
  }

  p {
    font-size: 13px;
    line-height: 2;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterCTA />

      <FooterWrapper>
        <div className="container">
          <div className="links">
            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a>Security</a>
                </li>
                <li>
                  <a>Terms of Service</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
                <li>
                  <a>Case Study</a>
                </li>
                <li>
                  <a>Documentation</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Services</h3>
              <ul>
                <li>
                  <a>Messaging Services</a>
                </li>
                <li>
                  <a>Identity/Verification Services</a>
                </li>
                <li>
                  <a>Wallet Services</a>
                </li>
                <li>
                  <a>Financial Services</a>
                </li>
                <li>
                  <a>Crypto-currency Services</a>
                </li>
                <li>
                  <a>Bill Payment Services</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="about">
            <img src={icon} alt="dojah" />
            <span className="contact">
              <span>
                <Phone /> 08139841310
              </span>
              <span>
                <Mail /> info@dojah.io
              </span>
            </span>
            <span className="socials">
              <Twitter />
              <Slack />
              <Instagram />
              <Facebook />
            </span>
          </div>

          <p>
            (231) 352-6536, 2237 Paul Rose Rd. Frankfort, Michigan(MI), 49635
          </p>
          <p>
            Bibendum augue blandit urna, egestas dignissim nunc. Sit
            sollicitudin id mollis nulla amet placerat imperdiet nunc orci.
            Egestas suspendisse in in amet libero adipiscing. Tristique semper
            vel tincidunt purus consequat mauris. Tortor, sit amet amet, duis
            cras eget lorem feugiat. Tempus ac sed consectetur pellentesque
            tortor porttitor aenean viverra aenean. Porttitor feugiat egestas
            amet viverra in quam vestibulum etiam.
          </p>

          <p className="copyright">©2021 Dojah. All rights reserved</p>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
