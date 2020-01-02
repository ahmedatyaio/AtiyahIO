import React from 'react';
import styled from 'styled-components';

const RightSide = () => {
  const StyledRight = styled.div`
    background: ${props => props.theme.colors.dark};
    padding: 3rem 0;
    width: 49%;
    border-radius: 0.6rem;
    position: relative;
  `;
  return (
    <StyledRight>
      <h1>RIGHTSIDE</h1>
    </StyledRight>
  );
};

export default RightSide;
