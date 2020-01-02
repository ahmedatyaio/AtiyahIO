import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Me from '../../images/me.png';

const LeftSide = () => {
  const StyledLeft = styled.div`
    background: ${props => props.theme.colors.dark};
    padding: 3rem 0;
    width: 49%;
    border-radius: 0.6rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
    position: relative;
    .clip {
      clip-path: polygon(100% 35%, 100% 58%, 0px 96%, 0px 73%);
      position: absolute;
      bottom: 1rem;
      left: 0;
      height: 100%;
      width: 100%;
      background: #313133;
    }
    .my-photo {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 80%;
      img {
        width: 70%;
        float: right;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
      }
    }
    .content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      margin-left: 3rem;
    }
    h2 {
      color: ${props => props.theme.colors.grey};
      font-size: 1.8rem;
      letter-spacing: 0.3rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    h1 {
      margin: 0;
      font-family: ${props => props.theme.fonts.pri};
      font-size: 6rem;
      span {
        display: block;
      }
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: ${props => props.theme.colors.green};
      letter-spacing: 0.4rem;
      font-size: 1.3rem;
      margin-top: 2rem;
      border: 1px solid ${props => props.theme.colors.green};
      border-radius: 3rem;
      padding: 1.2rem 3rem;
      position: relative;
      margin-left: 1rem;
      margin-bottom: 6rem;
      transition: 0.3s all ease;
      &:before {
        border-radius: 3rem;
        border: 1px solid ${props => props.theme.colors.green};
        content: '';
        position: absolute;
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -8px;
        transition: 0.3s all ease;
      }
      &:hover {
        background: ${props => props.theme.colors.green};
        color: white;
        &:before {
          border: 2px solid ${props => props.theme.colors.green};
          top: -10px;
          right: -10px;
          bottom: -10px;
          left: -10px;
        }
      }
    }
  `;
  return (
    <StyledLeft>
      <div className="clip"></div>
      <div className="my-photo">
        <img src={Me} alt="me" />
      </div>
      <div className="content">
        <h2>Ahmed M. Atiyah</h2>
        <h1>
          Fullstack <span>Web Developer</span>
        </h1>
        <Link to="/">ABOUT ME</Link>
      </div>
    </StyledLeft>
  );
};

export default LeftSide;
