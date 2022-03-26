import styled from 'styled-components';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';
import timer from '../../assets/images/timer.png';
import scale from '../../assets/images/scale.png';

const StyledCardWrapper = styled.div`
    overflow: hidden;
    border-radius: .8rem;
    background-color: ${({theme}) => theme.colors.grayLight};
    border: 1px solid ${({theme}) => theme.colors.gray};
    text-align: left;
    box-shadow: 0 4px 25px rgba(38,78,118, .1);
`;
const StyledCardContent = styled.div`
    padding: 1.5rem;
`;
const StyledCardImageWrapper = styled.div`
    position: relative;
`;
const StyledCardImage = styled.img`
    width: 100%;
    height: 15em;
    object-fit: cover;
`;
const StyledCardTitle = styled.h3`
    font-size: ${({theme}) => theme.font.title};
    font-weight: ${({theme}) => theme.weight.bold};
    color: ${({theme}) => theme.colors.black};
    margin: 0 0 1.5rem 0;
`;
const StyledCardSubtitle = styled.h4`
    font-size: ${({theme}) => theme.font.subtitle};
    font-weight: ${({theme}) => theme.weight.semiBold};
    color: ${({theme}) => theme.colors.black};
    margin: 0 0 1rem 0;
`;
const StyledButtonGroup = styled.div`
    display: flex;
    flex-direction: space-around;
    align-items: center;
`;
const StyledOrderedList = styled.ol`
    margin: 1.5rem 0;
    padding-left: 2rem;
`;
const StyledUnorderedList = styled.ul`
    margin: 1.5rem 0;
`;
const StyledListItem = styled.li`
    margin-bottom: .5rem;
    line-height: 1.4;
`;
const StyledMacroWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 1rem 0 1rem;
`;
const StyledMacroInner = styled.div`
    display: flex;
    width: ${({big}) => big ? '9.5rem' : '8rem'};
    justify-content: space-between;
    align-items: center;
    padding: .5rem;
    border: 1px solid ${({theme}) => theme.colors.grayDark};
    border-radius: .6rem;
    margin: 0.5rem;
`;
const StyledMacroText = styled.span`
    font-size: ${({theme}) => theme.font.paragraph};
    font-weight: ${({theme}) => theme.weight.semiBold};
`;
const StyledTimeInner = styled(StyledMacroInner)`
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    background-color: #fff;
`;
const StyledWeightInner = styled(StyledMacroInner)`
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    background-color: #fff;
`;
const StyledIcon = styled.img`
    width: 1.8rem;
`;

const Card = ({title, time, desc, proteins, carbons, fats, weight, kcal, viewing, image, ingredients, steps, id, handleView, handleRecipe}) => {
    return (
        <StyledCardWrapper>
            <StyledCardImageWrapper>
                <StyledCardImage src={image} alt='title' />
                <StyledTimeInner big>
                    <StyledIcon src={timer} alt='timer' />
                    <StyledMacroText>{time} min</StyledMacroText>
                </StyledTimeInner>
                <StyledWeightInner big>
                    <StyledIcon src={scale} alt='scale' />
                    <StyledMacroText>{weight} g</StyledMacroText>
                </StyledWeightInner>
            </StyledCardImageWrapper>
            <StyledMacroWrapper>
                <StyledMacroInner big>
                <StyledMacroText>Kcal:</StyledMacroText>
                    <StyledMacroText>{kcal}</StyledMacroText>
                </StyledMacroInner>
                <StyledMacroInner>
                    <StyledMacroText>B:</StyledMacroText>
                    <StyledMacroText>{proteins} g</StyledMacroText>
                </StyledMacroInner>
                <StyledMacroInner>
                    <StyledMacroText>W:</StyledMacroText>
                    <StyledMacroText>{carbons} g</StyledMacroText>
                </StyledMacroInner>
                <StyledMacroInner>
                    <StyledMacroText>T:</StyledMacroText>
                    <StyledMacroText>{fats} g</StyledMacroText>
                </StyledMacroInner>
            </StyledMacroWrapper>
            <StyledCardContent>
                <StyledCardTitle>{title}</StyledCardTitle>
                <Paragraph dangerouslySetInnerHTML={{__html: desc}}></Paragraph>
                {viewing && 
                    <>
                        <StyledCardSubtitle>Składniki:</StyledCardSubtitle>
                        <StyledUnorderedList>
                            {ingredients.map((ingredient, index) => (
                                <StyledListItem key={index}>{ingredient}</StyledListItem>
                            ))}
                        </StyledUnorderedList>
                        <StyledCardSubtitle>Kroki:</StyledCardSubtitle>
                        <StyledOrderedList>
                            {steps.map((step, index) => (
                                <StyledListItem key={index}>{step}</StyledListItem>
                            ))}
                        </StyledOrderedList>
                    </>
                }
                <StyledButtonGroup>
                    <Button marginZero onClick={() => handleView(id)}>Zobacz {viewing ? 'mniej' : 'więcej'}</Button>
                    <Button onClick={() => handleRecipe(id, title, kcal, proteins, carbons, fats)}>Dodaj posiłek</Button>
                </StyledButtonGroup>
            </StyledCardContent>
        </StyledCardWrapper>
    )
}

export default Card;