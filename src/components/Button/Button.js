import styled from 'styled-components';
import { device } from '../../device';

const Button = styled.button`
    width: ${({small}) => small ? '120px' : 'auto'};
    font-size: ${({theme}) => theme.font.paragraph};
    font-weight: ${({theme}) => theme.weight.regular};
    background-color: ${({theme, remove}) => remove ? theme.colors.red : theme.colors.blueLight};
    color: white;
    padding: 1rem;
    border-radius: .8rem;
    border: none;
    margin: ${({marginZero}) => marginZero ? '0' : '0 1rem'};
    cursor: pointer;
    transition: all .3s ease-in-out;

    @media ${device.tablet} {
        font-size: ${({theme}) => theme.font.button};
    }
    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0, .16);
    }
`;

export default Button;