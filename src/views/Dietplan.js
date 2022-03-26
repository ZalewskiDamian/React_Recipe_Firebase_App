import {useState} from 'react';
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/pl';
import styled from 'styled-components';
import { device } from "../device";
import { useSelector, useDispatch } from 'react-redux';
import { removeRecipe } from '../redux/recipeReducer';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    padding: 10rem 1rem 9rem;
    text-align: center;

	@media ${device.tablet} {
		padding: 2.5rem 4rem;
	}
`;
const StyledRecipesWrapper = styled.div`
    width: 100%;
    border: 1px solid ${({theme}) => theme.colors.blueLight};
    border-radius: .8rem;
    overflow: hidden;
`;
const StyledRecipesHeader = styled.div`
    background-color: ${({theme}) => theme.colors.blue};
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const StyledTitle = styled.h2`
    font-size: ${({theme}) => theme.font.title};
    font-weight: ${({theme}) => theme.weight.bold};
    color: ${({theme}) => theme.colors.white};
    margin-right: 2rem;
`;
const StyledDay = styled.span`
    font-size: ${({theme}) => theme.font.subtitle};
    font-weight: ${({theme}) => theme.weight.semiBold};
    color: ${({theme}) => theme.colors.white};
`;
const StyledCardsWrapper = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: minmax(350px, max-content) repeat(auto-fill, 350px) 20%;
`;
const StyledRecipeCard = styled.div`
    width: 350px;
    border: 1px solid ${({theme}) => theme.colors.blueLight};
    box-shadow: 0 4px 25px rgba(38,78,118, .1);
    border-radius: .4rem;
    padding: 1.5rem 1rem;
`;
const StyledRecipeCardTitle = styled.p`
    font-size: ${({theme}) => theme.font.subtitle};
    font-weight: ${({theme}) => theme.weight.semiBold};
    margin: 0 0 1rem 0;
`;
const StyledRecipeCardInner = styled.div`
    border-radius: 2.5rem;
    background-color: ${({theme}) => theme.colors.gray};
    padding: .7rem 1.2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const StyledRecipeCardText = styled.span`
    font-size: ${({theme}) => theme.font.paragraph};
    font-weight: ${({theme}) => theme.weight.medium};

    &:first-child {
        margin-right: 1rem;
    }
`;


const Dietplan = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const { recipes } = useSelector((state) => state.recipes);
    const dispatch = useDispatch();

    const handleDayClick = (day) => {
        setSelectedDay(day);
    }

    return (
        <StyledWrapper>
            <DayPicker 
                localeUtils={MomentLocaleUtils}
                locale='pl'
                onDayClick={handleDayClick}
                selectedDays={selectedDay}
            /> 
            <StyledRecipesWrapper>
                <StyledRecipesHeader>
                    <StyledTitle>Moje posiłki:</StyledTitle>
                    <StyledDay>{selectedDay ? selectedDay.toLocaleDateString() : 'Wybierz dzień'}</StyledDay>
                </StyledRecipesHeader>
                
                    {recipes.length > 0 ? 
                    (
                        <StyledCardsWrapper>
                            {recipes.map((recipe, index) => {
                                return (
                                    <StyledRecipeCard key={index}>
                                        <StyledRecipeCardTitle>{recipe.title}</StyledRecipeCardTitle>
                                        <StyledRecipeCardInner>
                                            <StyledRecipeCardText>Kcal:</StyledRecipeCardText>
                                            <StyledRecipeCardText>{recipe.kcal} kcal</StyledRecipeCardText>
                                        </StyledRecipeCardInner>
                                        <StyledRecipeCardInner>
                                            <StyledRecipeCardText>Białka:</StyledRecipeCardText>
                                            <StyledRecipeCardText>{recipe.proteins} g</StyledRecipeCardText>
                                        </StyledRecipeCardInner>
                                        <StyledRecipeCardInner>
                                            <StyledRecipeCardText>Węglowodany:</StyledRecipeCardText>
                                            <StyledRecipeCardText>{recipe.carbons} g</StyledRecipeCardText>
                                        </StyledRecipeCardInner>
                                        <StyledRecipeCardInner>
                                            <StyledRecipeCardText>Tłuszcze:</StyledRecipeCardText>
                                            <StyledRecipeCardText>{recipe.fats} g</StyledRecipeCardText>
                                        </StyledRecipeCardInner>
                                        <Button type='button' onClick={() => dispatch(removeRecipe(recipe.id))}>Usuń</Button>
                                    </StyledRecipeCard>
                                )
                            })}
                        </StyledCardsWrapper>
                    ) : 
                    (
                        <Paragraph marginTop>Brak wybranych przepisów</Paragraph>
                    )
                    }
                    
            </StyledRecipesWrapper>
        </StyledWrapper>
    )
}

export default Dietplan