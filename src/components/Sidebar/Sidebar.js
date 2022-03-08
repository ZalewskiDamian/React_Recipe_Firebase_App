import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { sidebarData } from './SidebarData';


const StyledSidebar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 220px;
    height: 100vh;
    padding: 2.5rem 1.5rem;
    background-color: ${({theme}) => theme.colors.green};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: -3px 0 5px 0 #555;
`;
const StyledLinkList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
`;
const StyledLinkItem = styled.li`
    width: 100%;
    padding: .7rem 1rem;
    border-radius: .8rem;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
    &:hover {
        background-color: ${({theme}) => theme.colors.greenDark};
    }
`;
const StyledIcon = styled.img`
    width: 2rem;
    height: auto;
`;
const StyledSpan = styled.span`
    color: ${({theme}) => theme.colors.black};
    font-weight: ${({theme}) => theme.weight.bold};
`;
const StyledLinkInner = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-gap: 1rem;
    align-items: center;
`;
const StyledLogo = styled.img`
    width: 125px;
    height: auto;
    margin-bottom: 25px;
`;

const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledLogo src={logo} alt='logo' />
            <StyledLinkList>
                {sidebarData.map((item, index) => { 
                    
                    return (
                        <StyledLinkItem 
                            key={index}
                            className={window.location.pathname === item.link ? 'activeLink' : ''}
                            onClick={() => {window.location.pathname = item.link}}
                        >
                            <NavLink to={item.link}>
                                <StyledLinkInner>
                                    <StyledIcon src={item.icon} alt={item.title} />
                                    <StyledSpan>{item.title}</StyledSpan>
                                </StyledLinkInner>
                            </NavLink>
                        </StyledLinkItem>
                )})}
            </StyledLinkList>
        </StyledSidebar>
    )
}

export default Sidebar;