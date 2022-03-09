import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({theme}) => theme.font.paragraph};
    font-weight: ${({theme, bold}) => bold ? theme.weight.bold : theme.weight.regular};
    line-height: 1.4;
    margin: 0 0 1.5rem 0;
`;

export default Paragraph;
