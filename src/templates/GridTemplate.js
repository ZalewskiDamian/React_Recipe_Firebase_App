import styled from 'styled-components';
import { device } from '../device';

const StyledWrapper = styled.div`
    padding: 10rem 1rem 9rem;
    text-align: center;

	@media ${device.tablet} {
		padding: 2.5rem 4rem;
	}
`;
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 420px);
    grid-gap: 30px 85px;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1500px) {
        grid-gap: 45px;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
    }
`;

const GridTemplate = ({ children }) => {
    return (
        <StyledWrapper>
            <StyledGrid>
                {children}
            </StyledGrid>
        </StyledWrapper>
    )
}

export default GridTemplate;