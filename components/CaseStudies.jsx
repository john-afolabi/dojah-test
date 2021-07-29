import React from 'react';
import styled from 'styled-components';
import caseStudy1 from '../assets/images/jpg/case-study-1.jpg';
import caseStudy2 from '../assets/images/jpg/case-study-2.jpg';
import caseStudy3 from '../assets/images/jpg/case-study-3.jpg';
import caseStudy4 from '../assets/images/jpg/case-study-4.jpg';
import { HR } from './KYC';
import ArrowIMG from '../assets/images/svg/arrow.svg';

const CaseStudiesWrapper = styled.section`
  padding: 100px 0;
  div.container {
    display: flex;
    justify-content: center;

    div.cs-left {
      color: #677189;
      h2 {
        color: #1b2a4e;
      }
      > a {
        color: #3977de;
        font-size: 14px;
      }

      div.case-study-1 {
        margin-right: 10px;
        margin-top: 20px;
        position: relative;
        background: url(${caseStudy1}) center no-repeat;
        background-size: cover;
        height: 605px;
        width: 333px;
        color: white;
      }
    }

    div.cs-right {
      div.case-study-2 {
        margin: 10px;
        position: relative;
        background: url(${caseStudy2}) center no-repeat;
        background-size: cover;
        height: 390px;
        width: 687px;
        color: white;
      }

      div.cs-bottom {
        display: flex;
        justify-content: space-evenly;
        .case-study-3 {
          margin: 10px;
          position: relative;
          background: url(${caseStudy3}) center no-repeat;
          background-size: cover;
          height: 350px;
          width: 330px;
          color: white;
        }
        .case-study-4 {
          margin: 10px;
          position: relative;
          background: url(${caseStudy4}) center no-repeat;
          background-size: cover;
          height: 350px;
          width: 330px;
          color: white;
        }
      }
    }

    .content {
      position: absolute;
      bottom: 30px;
      padding: 0 55px 20px;

      hr {
        width: 80%;
        border: none;
        height: 0.1px;
        background: #ffffff6f;
        margin: 24px 0;
      }

      a {
        font-size: 14px;
      }
    }

    svg {
      vertical-align: center;
      margin-left: 6px;
    }
  }
`;

const CaseStudies = () => {
  return (
    <CaseStudiesWrapper>
      <div className="container">
        <div className="cs-left">
          <HR />
          <h2>Read our case studies</h2>
          <p>
            Find out about exciting products that have
            <br /> been built and that you can build with Dojah!
          </p>
          <a href="#">
            Check out more <ArrowIMG />
          </a>

          <div className="case-study-1">
            <div className="content">
              <h3>Authorizing requests and identifying your application</h3>
              <hr />
              <a href="">
                Continue reading <ArrowIMG />
              </a>
            </div>
          </div>
        </div>

        <div className="cs-right">
          <div className="case-study-2">
            <div className="content">
              <h3>Authorizing requests and identifying your application</h3>
              <hr />
              <a href="">
                Continue reading <ArrowIMG />
              </a>
            </div>
          </div>

          <div className="cs-bottom">
            <div className="case-study-3">
              <div className="content">
                <h3>Authorizing requests and identifying your application</h3>
                <hr />
                <a href="">
                  Continue reading <ArrowIMG />
                </a>
              </div>
            </div>
            <div className="case-study-4">
              <div className="content">
                <h3>Authorizing requests and identifying your application</h3>
                <hr />
                <a href="">
                  Continue reading <ArrowIMG />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CaseStudiesWrapper>
  );
};

export default CaseStudies;
