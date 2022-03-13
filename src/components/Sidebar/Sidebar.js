import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { sidebarData } from './SidebarData';
import avatar from '../../assets/images/user.png';


const StyledSidebar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 270px;
    height: 100vh;
    padding: 2.5rem 0;
    background-color: ${({theme}) => theme.colors.blue};
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
    padding: 1.5rem 2rem;
    border-top: 1px solid ${({theme}) => theme.colors.navBorder};

    &:last-child {
        border-bottom: 1px solid ${({theme}) => theme.colors.navBorder};
    }
    &:hover {
        background-color: ${({theme}) => theme.colors.blueLight};
    }
`;
const StyledIcon = styled.img`
    width: 2rem;
    height: auto;
`;
const StyledSpan = styled.span`
    color: ${({theme}) => theme.colors.white};
    font-weight: ${({theme}) => theme.weight.medium};
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
const StyledUserPanelWrapper = styled.div`
    margin-top: 3rem;
    width: 90%;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: ${({theme}) => theme.colors.blueLight};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const StyledUserPannelInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;
const StyledUserText = styled.span`
    font-size: ${({theme}) => theme.font.userText};
    font-weight: ${({theme}) => theme.weight.regular};
    color: ${({theme}) => theme.colors.white};
`;
const StyledAvatar = styled.img`
    width: 6.4rem;
    height: 6.4rem;
    margin: 1rem auto 3rem;
`;

const Sidebar = () => {
    const { weight, demand, proteins, proteinsKcal, carbons, carbonsKcal, fats, fatsKcal } = useSelector((state) => state.user);
    return ( 
        <StyledSidebar>
            <StyledLogo src={logo} alt='logo' />
            <StyledLinkList>
                {sidebarData.map((item, index) => {
                    return (
                        <StyledLinkItem key={index} >
                            <NavLink to={item.link}>
                                <StyledLinkInner>
                                    <StyledIcon src={item.icon} alt={item.title} />
                                    <StyledSpan>{item.title}</StyledSpan>
                                </StyledLinkInner>
                            </NavLink>
                        </StyledLinkItem>
                )})}
            </StyledLinkList>
            <StyledUserPanelWrapper>
                <StyledAvatar src={avatar} alt='avatar' />
                <StyledUserPannelInner>
                    <StyledUserText>Waga:</StyledUserText>
                    <StyledUserText>{weight} kg</StyledUserText>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledUserText>Utrzymanie wagi:</StyledUserText>
                    <StyledUserText>{demand} kcal</StyledUserText>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledUserText>B:</StyledUserText>
                    <StyledUserText>{proteins} g ({proteinsKcal} kcal)</StyledUserText>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledUserText>W:</StyledUserText>
                    <StyledUserText>{carbons} g ({carbonsKcal} kcal)</StyledUserText>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledUserText>T:</StyledUserText>
                    <StyledUserText>{fats} g ({fatsKcal} kcal)</StyledUserText>
                </StyledUserPannelInner>
            </StyledUserPanelWrapper>
        </StyledSidebar>
    )
}

export default Sidebar;