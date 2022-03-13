import { useSelector, useDispatch } from 'react-redux';
import { setSex, setWeight, setActivity, setDemand, setDietType, setTotalDemand, setCalories } from '../redux/userSlice';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
    text-align: center;
`;
const StyledForm = styled.form`
    width: 100%;
	max-width: 50rem;
	border: 1px solid ${({theme}) => theme.colors.gray};
	padding: 2.5rem 1.5rem;
	margin: 0 auto 3rem;
	border-radius: .8rem;
`;
const StyledInput = styled.input`
    width: 100%;
    border-radius: .8rem;
    border: 1px solid ${({theme}) => theme.colors.gray};
	padding: 1rem 1.5rem;
	font-weight: ${({theme}) => theme.weight.semiBold};
	outline: 0;
`;
const StyledLabel = styled.label`
    display: block;
    margin-bottom: .8rem;
`;
const StyledSelect = styled.select`
	width: 100%;
    border-radius: .8rem;
    border: 1px solid ${({theme}) => theme.colors.gray};
	padding: 1rem 1.5rem;
	font-weight: ${({theme}) => theme.weight.semiBold};
	outline: 0;
	cursor: pointer;
`;

const StyledFormGroup = styled.div`
	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;
const StyledButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;
const StyledTable = styled.div`
	width: 100%;
	max-width: 70rem;
	margin: 0 auto 2rem;
	border: 1px solid ${({theme}) => theme.colors.grayDark};
	display: flex;
	flex-direction: column;
`;
const StyledTableRow = styled.div`
	display: grid;
	grid-template-columns: 25% 15% 60%;

	&:not(:last-of-type) {
		border-bottom: 1px solid ${({theme}) => theme.colors.grayDark};
	}
`;
const StyledCell = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&:not(:last-of-type) {
		border-right: 1px solid ${({theme}) => theme.colors.grayDark};
	}
`;
const StyledMacroTable = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border: 1px solid ${({theme}) => theme.colors.grayDark};
`;
const StyledMacroCell = styled.div`
	font-size: ${({theme}) => theme.font.userText};
	font-weight: ${({theme}) => theme.weight.semiBold};
`;

const Home = () => {
	const { sex, weight, activity, demand, dietType, totalDemand, proteins, proteinsKcal, fats, fatsKcal, carbons, carbonsKcal } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	
	const handleSubmit = e => {
		e.preventDefault();

		(sex === 'woman') ? 
		(dispatch(setDemand(Math.round(.9*(weight * 24 * activity)) * 1))) 
		: 
		(dispatch(setDemand(Math.round(weight * 24 * activity) * 1)))
		
	}
    return (
		<StyledWrapper>
			<h1>Oblicz swoje zapotrzebowanie kaloryczne</h1>
			<Paragraph>
				Ten wzór wymaga jedynie znajomości swojej wagi. Jeśli nie chce Ci się liczyć, ale chciałbyś wiedzieć ile może mniej więcej wynosić Twoje zapotrzebowanie, to jest to wzór dla Ciebie.
			</Paragraph>
			<Paragraph bold>
				BMR = waga (kg) x 24 (h)
			</Paragraph>
			<Paragraph bold>
				Całkowite Zapotrzebowanie = BMR x Współczynnik Aktywności Fizycznej*
			</Paragraph>
			<StyledTable>
				<StyledTableRow>
					<StyledCell>Niska aktywność</StyledCell>
					<StyledCell>1,2</StyledCell>
					<StyledCell>brak ćwiczeń + praca siedząca</StyledCell>
				</StyledTableRow>
				<StyledTableRow>
					<StyledCell>Średnio aktywny</StyledCell>
					<StyledCell>1,3 - 1,4</StyledCell>
					<StyledCell>ćwiczenia 3 razy/tydzień + praca siedząca</StyledCell>
				</StyledTableRow>
				<StyledTableRow>
					<StyledCell>Aktywny</StyledCell>
					<StyledCell>1,4 - 1,5</StyledCell>
					<StyledCell>codzienne ćwiczenia + praca w ruchu</StyledCell>
				</StyledTableRow>
				<StyledTableRow>
					<StyledCell>Bardzo aktywny</StyledCell>
					<StyledCell>1,6- 1,8</StyledCell>
					<StyledCell>codzienne intensywne ćwiczenia + praca fizyczna</StyledCell>
				</StyledTableRow>
			</StyledTable>
			<StyledForm onSubmit={handleSubmit}>
				<StyledLabel>Wybierz płeć:</StyledLabel>
				<StyledButtonGroup>
					<Button
						type='button'
						small
						name='men'
						onClick={(e) => dispatch(setSex(e.target.value = e.target.name))}
						className={sex === 'men' ? 'activeButton' : ''}
					>
						Mężczyzna
					</Button>
					<Button 
						type='button'
						name='woman'
						small
						onClick={(e) => dispatch(setSex(e.target.value = e.target.name))}
						className={sex === 'woman' ? 'activeButton' : ''}
					>
						Kobieta
					</Button>
				</StyledButtonGroup>
				<StyledFormGroup>
					<StyledLabel>Waga (kg):</StyledLabel>
					<StyledInput 
						type='text'
						onChange={(e) => dispatch(setWeight(e.target.value))}
					/>
				</StyledFormGroup>
				<StyledFormGroup>
					<StyledLabel>Współczynnik aktywności fizycznej:</StyledLabel>
					<StyledSelect
						onChange={(e) => dispatch(setActivity(e.target.value))}
					>
						<option value={1.2}>Niska aktywność</option>
						<option value={1.35}>Średnio aktywny</option>
						<option value={1.45}>Aktywny</option>
						<option value={1.7}>Bardzo aktywny</option>
					</StyledSelect>
				</StyledFormGroup>
				<Button>Oblicz</Button>
				<Paragraph bold marginTop>Twoje całkowite dzienne zapotrzebowanie:</Paragraph>
				<Paragraph>
					{demand ? demand + ' kcal' : ''} 
				</Paragraph>
				{demand !== 0 && 
				<StyledMacroTable>
					<StyledMacroCell>
						Białko: {proteins} g ({proteinsKcal} kcal)
					</StyledMacroCell>
					<StyledMacroCell>
						Węglowodany: {carbons} g ({carbonsKcal} kcal)
					</StyledMacroCell>
					<StyledMacroCell>
						Tłuszcze: {fats} g ({fatsKcal} kcal)
					</StyledMacroCell>
				</StyledMacroTable>
				}
				<Paragraph>Jeśli chcesz zachować wagę nie wybieraj nic</Paragraph>
				<StyledButtonGroup>
					<Button 
						type='button'
						name='lose'
						onClick={(e) => dispatch(setDietType(e.target.value = e.target.name))}
						className={dietType === 'lose' ? 'activeButton' : ''}
					>
						Chcę schudnąć
					</Button>
					<Button 
						type='button'
						name='gain' 
						onClick={(e) => dispatch(setDietType(e.target.value = e.target.name))}
						className={dietType === 'gain' ? 'activeButton' : ''}
					>
						Chcę przytyć
					</Button>
				</StyledButtonGroup>
				{dietType === 'lose' && 
					<>
						<StyledFormGroup>
							<StyledLabel>Wpisz ile kalorii dziennie chcesz obciąć</StyledLabel>
							<StyledInput 
								type='text'
								onChange={(e) => dispatch(setCalories(e.target.value))}
							/>
						</StyledFormGroup>
						<Button type='button' onClick={() => dispatch(setTotalDemand())}>Oblicz</Button>
					</>
				}
				{dietType === 'gain' &&
					<>
						<StyledFormGroup>
							<StyledLabel>Wpisz ile kalorii dziennie chcesz dodać</StyledLabel>
							<StyledInput 
								type='text'
								onChange={(e) => dispatch(setCalories(e.target.value))}
							/>
						</StyledFormGroup>
						<Button type='button' onClick={() => dispatch(setTotalDemand())}>Oblicz</Button>
					</>
				}
			</StyledForm>
			{totalDemand !== 0 && <Paragraph>Twoje zapotrzebowanie wynosi teraz: {totalDemand} kcal</Paragraph>}
		</StyledWrapper>
    )
}

export default Home;