import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {
  const Header = styled.div`
    z-index: 1;
    position: relative;
    text-align: center;
    padding-top: 40vh;
  `;

  const H1 = styled.h1`
    color: #fff;
  `;
  const Slideshow = styled.ul`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const Li = styled.li`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 50s linear infinite;
    :nth-child(1) {
      background-image: url(http://i.imgur.com/K3mPv14.jpg);
    }
    :nth-child(2) {
      background-image: url(http://i.imgur.com/SBEmFpv.jpg);
      animation-delay: 10s;
    }
    :nth-child(3) {
      background-image: url(http://i.imgur.com/emvhOnb.jpg);
      animation-delay: 20s;
    }
    :nth-child(4) {
      background-image: url(http://i.imgur.com/2LSMCmJ.jpg);
      animation-delay: 30s;
    }
    :nth-child(5) {
      background-image: url(http://i.imgur.com/TVGe0Ef.jpg);
      animation-delay: 40s;
    }
    @keyframes imageAnimation {
      0% {
        opacity: 0;
        animation-timing-function: ease-in;
      }
      10% {
        opacity: 1;
        animation-timing-function: ease-out;
      }
      20% {
        opacity: 1;
      }
      30% {
        opacity: 0;
      }
    }
  `;

  return (
    <div>
      <Header>
        <H1>
          <span className="glyphicon glyphicon-tent"></span>Welcome to YelpCamp!
        </H1>
        <Link className="btn btn-lg btn btn-purple" to="/campgrounds">
          View All Campgrounds
        </Link>
      </Header>

      <Slideshow>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
        <Li></Li>
      </Slideshow>
    </div>
  );
};

export default Landing;