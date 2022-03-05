import React from 'react';
import styled from 'styled-components';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
`;
const StyledTitle = styled.h1`
    font-size: 2.4rem;
    color: white;
`;
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 85px;

    @media (max-width: 1500px) {
        grid-gap: 45px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

const GridTemplate = ({ children }) => {
    return (
        <UserPageTemplate>
            <StyledWrapper>
                <StyledTitle>Śniadania</StyledTitle>
                <StyledGrid>
                    {children}
                </StyledGrid>
            </StyledWrapper>
        </UserPageTemplate>
    )
}

export default GridTemplate;