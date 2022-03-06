import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: ${({theme}) => theme.font.paragraph};
    font-weight: ${({theme, bold}) => bold ? theme.weight.bold : theme.weight.regular};
    line-height: 1.4;
`;

export default Paragraph;
