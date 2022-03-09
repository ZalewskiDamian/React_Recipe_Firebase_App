import styled from 'styled-components';
import Button from '../Button/Button';
import Paragraph from '../Paragraph/Paragraph';

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

const Card = ({title, desc, viewing, image, ingredients, steps, id, handleView}) => {
    return (
        <StyledCardWrapper>
            <StyledCardImage src={image} alt='title' />
            <StyledCardContent>
                <StyledCardTitle>{title}</StyledCardTitle>
                <Paragraph dangerouslySetInnerHTML={{__html: desc}}></Paragraph>
                {viewing && 
                    <>
                        <StyledCardSubtitle>Składniki:</StyledCardSubtitle>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <StyledCardSubtitle>Kroki:</StyledCardSubtitle>
                        <ol>
                            {steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </>
                }
                <StyledButtonGroup>
                    <Button marginZero onClick={() => handleView(id)}>Rozwiń</Button>
                    <Button remove>Usuń</Button>
                </StyledButtonGroup>
            </StyledCardContent>
        </StyledCardWrapper>
    )
}

export default Card;