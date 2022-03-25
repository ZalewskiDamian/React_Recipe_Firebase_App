import {useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { sidebarData } from './SidebarData';
import hamburger from '../../assets/images/hamburger.png';
import close from '../../assets/images/close.png';
import {device} from '../../device';


const StyledSidebar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.blue};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: -3px 0 5px 0 #555;
    z-index: 2;

    @media ${device.tablet} {
        width: 270px;
        height: 100vh;
        padding: 2.5rem 0;
        justify-content: flex-start;
    }
`;
const StyledSidebarHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet} {
        justify-content: center;
    }
`;
const StyledNavButton = styled.div`
    width: 32px;
    height: 32px;
    background-image: url(${({isActive}) => (isActive ? close : hamburger)});
    background-size: 100% 100%;

    @media ${device.tablet} {
        display: none;
    }
`;
const StyledLinkList = styled.ul`
    background-color: ${({theme}) => theme.colors.blue};
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    list-style: none;
    width: 85%;
    height: 100vh;
    position: absolute;
    top: 0;
    opacity: ${({isActive}) => isActive ? '1' : '0'};
    left: ${({isActive}) => isActive ? '0' : '-100%'};
    transition: all .3s ease-in-out;
    box-shadow: -2px 3px 6px 0 #555;

    @media ${device.tablet} {
        padding: 0;
        width: 100%;
        position: unset;
        opacity: 1;
        height: unset;
        display: unset;
        box-shadow: none;
    }
`;
const StyledLinkItem = styled.li`
    width: 100%;
    padding: 1.5rem 2rem;
    border: 0;

    @media ${device.tablet} {
        border-top: 1px solid ${({theme}) => theme.colors.navBorder};

        &:last-child {
            border-bottom: 1px solid ${({theme}) => theme.colors.navBorder};
        }
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

    @media ${device.tablet} {
        margin-bottom: 25px;
    }
`;
const StyledUserPanelWrapper = styled.div`
    width: 100%;
    padding: 1.5rem .5rem 1rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: ${({theme}) => theme.colors.blueLight};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: .5rem;
    position: fixed;
    left: 0;
    bottom: 0;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
        width: 90%;
        margin-top: 3rem;
        position: unset;
        grid-template-columns: repeat(1, 1fr);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        padding: 1.5rem;
    }
`;
const StyledUserPannelInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;
const StyledUserPannelRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const StyledProgressBarWrapper = styled.div`
    width: 100%;
    height: 1rem;
    border-radius: .4rem;
    background-color: ${({theme}) => theme.colors.blueDark};
    margin-bottom: .5rem;
    overflow: hidden;
`;
const StyledProgressBar = styled.div`
    background-color: ${({theme, progress, length}) => progress >= length ? theme.colors.red : theme.colors.white};
    height: 1rem;
    border-top-right-radius: .4rem;
    border-bottom-right-radius: .4rem;
    width: ${({length, progress}) => progress ? Math.round((progress / length) * 100) : 0 }%;
    max-width: 100%;
    transition: .2s ease-in;
`;
const StyledUserText = styled.span`
    font-size: ${({theme}) => theme.font.userTextMobile};
    font-weight: ${({theme}) => theme.weight.regular};
    color: ${({theme}) => theme.colors.white};

    @media ${device.tablet} {
        font-size: ${({theme}) => theme.font.userText};
    }
`;

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const { demand, proteins, carbons, fats } = useSelector((state) => state.user);
    const { recipes } = useSelector((state) => state.recipes);
    let dailyUserKcal = 0;
    let dailyUserProteins = 0;
    let dailyUserCarbons = 0;
    let dailyUserFats = 0;
    
    if (recipes.length > 0) {
        recipes.forEach((recip) => {
            dailyUserKcal += recip.kcal;
            dailyUserProteins += recip.proteins;
            dailyUserCarbons += recip.carbons;
            dailyUserFats += recip.fats;
        })
    }
    
    return ( 
        <StyledSidebar>
            <StyledSidebarHeader>
                <StyledLogo src={logo} alt='logo' />
                <StyledNavButton 
                    onClick={() => setIsActive(!isActive)}
                    isActive={isActive}
                />
            </StyledSidebarHeader>
            <StyledLinkList isActive={isActive}>
                {sidebarData.map((item, index) => {
                    return (
                        <StyledLinkItem key={index} onClick={() => setIsActive(false)} >
                            <NavLink to={item.link}>
                                <StyledLinkInner>
                                    <StyledIcon src={item.icon} alt={item.title} />
                                    <StyledSpan>{item.title}</StyledSpan>
                                </StyledLinkInner>
                            </NavLink>
                        </StyledLinkItem>
                    )
                })}
            </StyledLinkList>
            <StyledUserPanelWrapper>
                <StyledUserPannelInner>
                    <StyledProgressBarWrapper>
                        <StyledProgressBar length={demand} progress={dailyUserKcal}></StyledProgressBar>
                    </StyledProgressBarWrapper>
                    <StyledUserPannelRow>
                        <StyledUserText>Kcal:</StyledUserText>
                        <StyledUserText>{dailyUserKcal} kcal</StyledUserText>
                    </StyledUserPannelRow>
                    <StyledUserPannelRow>
                        <StyledUserText>cel:</StyledUserText>
                        <StyledUserText>{demand} kcal</StyledUserText>
                    </StyledUserPannelRow>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledProgressBarWrapper>
                        <StyledProgressBar length={proteins} progress={dailyUserProteins} ></StyledProgressBar>
                    </StyledProgressBarWrapper>
                    <StyledUserPannelRow>
                        <StyledUserText>B:</StyledUserText>
                        <StyledUserText>{dailyUserProteins} g</StyledUserText>
                    </StyledUserPannelRow>
                    <StyledUserPannelRow>
                        <StyledUserText>cel:</StyledUserText>
                        <StyledUserText>{proteins} g</StyledUserText>
                    </StyledUserPannelRow>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledProgressBarWrapper>
                        <StyledProgressBar length={carbons} progress={dailyUserCarbons}></StyledProgressBar>
                    </StyledProgressBarWrapper>
                    <StyledUserPannelRow>
                        <StyledUserText>W:</StyledUserText>
                        <StyledUserText>{dailyUserCarbons} g</StyledUserText>
                    </StyledUserPannelRow>
                    <StyledUserPannelRow>
                        <StyledUserText>cel:</StyledUserText>
                        <StyledUserText>{carbons} g</StyledUserText>
                    </StyledUserPannelRow>
                </StyledUserPannelInner>
                <StyledUserPannelInner>
                    <StyledProgressBarWrapper>
                        <StyledProgressBar length={fats} progress={dailyUserFats}></StyledProgressBar>
                    </StyledProgressBarWrapper>
                    <StyledUserPannelRow>
                        <StyledUserText>T:</StyledUserText>
                        <StyledUserText>{dailyUserFats} g</StyledUserText>
                    </StyledUserPannelRow>
                    <StyledUserPannelRow>
                        <StyledUserText>cel:</StyledUserText>
                        <StyledUserText>{fats} g</StyledUserText>
                    </StyledUserPannelRow>
                </StyledUserPannelInner>
            </StyledUserPanelWrapper>
        </StyledSidebar>
    )
}

export default Sidebar;