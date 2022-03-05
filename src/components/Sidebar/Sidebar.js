import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    padding: 10px;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledHeading = styled.p`
    color: var(--dark);
    font-size: 20px;
    font-weight: 700;
`;

const StyledLink = styled(Link)`
    color: white;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
        <StyledHeading>Wybierz kategorię</StyledHeading>
        <StyledLink to='/'>Strona główna</StyledLink>
        <StyledLink to='/breakfasts'>Śniadania</StyledLink>
    </StyledSidebar>
  )
}

export default Sidebar;