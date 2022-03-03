import React from 'react';
import styled from 'styled-components';

const MainViewWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    padding-left: 280px;
`;

const MainView = ({ children }) => {
  return <MainViewWrapper>{children}</MainViewWrapper>
}

export default MainView;