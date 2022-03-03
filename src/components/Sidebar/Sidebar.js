import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    padding: 10px;
    background-color: red;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
        Sidebar
    </StyledSidebar>
  )
}

export default Sidebar;