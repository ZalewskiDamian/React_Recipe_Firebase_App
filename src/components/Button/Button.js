import styled, {css} from 'styled-components';

const Button = styled.button`
    width: auto;
    font-size: ${({theme}) => theme.font.button};
    font-weight: ${({theme}) => theme.weight.regular};
    background-color: ${({theme}) => theme.colors.green};
    color: white;
    padding: 1rem;
    border-radius: .8rem;
    border: none;
    margin: 0 1rem;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0, .16);
    }
    ${({small}) => small && css`
        width: 120px;
    `}
`;

export default Button;