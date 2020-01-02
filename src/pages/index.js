import React from 'react';
import styled from 'styled-components';

import LeftSide from '../components/homepage/LeftSide';
import RightSide from '../components/homepage/RightSide';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const StyledHomepage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
  `;
  return (
    <Layout>
      <SEO title="Homepage" />
      <div className="container">
        <StyledHomepage>
          <LeftSide />
          <RightSide />
        </StyledHomepage>
      </div>
    </Layout>
  );
};

export default IndexPage;
