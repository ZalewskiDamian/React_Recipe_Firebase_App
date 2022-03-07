import React, {useState, useEffect} from 'react';
import { db } from '../firebase.config';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore'; 
import styled from 'styled-components';
import UserPageTemplate from '../templates/UserPageTemplate';
import Button from '../components/Button/Button';
import Paragraph from '../components/Paragraph/Paragraph';

const StyledWrapper = styled.div`
    padding: 25px 150px 25px 70px;
    text-align: center;
`;
const StyledForm = styled.form`
    width: 100%;
	max-width: 40rem;
	border: 1px solid ${({theme}) => theme.colors.green};
	padding: 2.5rem 1.5rem;
	margin: 0 auto;
	border-radius: .8rem;
	box-shadow: 0 4px 25px rgba(38,78,118, .1);
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
	border: 1px solid black;
	display: flex;
	flex-direction: column;
`;
const StyledTableRow = styled.div`
	display: grid;
	grid-template-columns: 25% 15% 60%;

	&:not(:last-of-type) {
		border-bottom: 1px solid black;
	}
`;
const StyledCell = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	&:not(:last-of-type) {
		border-right: 1px solid black;
	}
`;

const Home = () => {
	const [sex, setSex] = useState('');
	const [weight, setWeight] = useState('');
	const [activity, setActivity] = useState(1.2);
	const [user, setUser] = useState({});
	const [demand, setDemand] = useState('');

	const userRef = collection(db, "user");
	const updateRef = doc(db, 'user', 'J3QSYXDbS97mD8S6qoRO');

	const handleSubmit = e => {
		e.preventDefault();

		const newUser = {
			sex: sex,
			weight: weight,
			activity: activity,
			demand: demand,
		}
		
		if (newUser.sex === 'woman') {
			setDemand(Math.round(.9*(newUser.weight * 24 * newUser.activity)) * 1) 
		} else {
			setDemand(Math.round(newUser.weight * 24 * newUser.activity) * 1)
		}
		
		setUser(newUser);

		if (!user) {
			addDoc(userRef, user)
		} else {
			updateDoc(updateRef, {
				weight: weight
			})
		}

	}

    return (
        <UserPageTemplate>
            <StyledWrapper>
                <h1>Wylicz swoje zapotrzebowanie energetyczne</h1>
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
							value={sex}
							onClick={(e) => setSex(e.target.value = e.target.name)}
							className={sex === 'men' ? 'activeButton' : ''}
						>
							Mężczyzna
						</Button>
                        <Button 
							type='button'
							name='woman'
							small
							value={sex}
							onClick={(e) => setSex(e.target.value = e.target.name)}
							className={sex === 'woman' ? 'activeButton' : ''}
						>
							Kobieta
						</Button>
                    </StyledButtonGroup>
                    <StyledFormGroup>
                        <StyledLabel>Waga (kg):</StyledLabel>
                        <StyledInput 
							type='text'
							onChange={(e) => setWeight(e.target.value)}
							value={weight}
						/>
                    </StyledFormGroup>
					<StyledFormGroup>
						<StyledLabel>Współczynnik aktywności fizycznej:</StyledLabel>
						<StyledSelect
							onChange={(e) => setActivity(e.target.value)}
							value={activity}
						>
							<option value={1.2}>Niska aktywność</option>
							<option value={1.35}>Średnio aktywny</option>
							<option value={1.45}>Aktywny</option>
							<option value={1.7}>Bardzo aktywny</option>
						</StyledSelect>
					</StyledFormGroup>
					<Button>Oblicz</Button>
                </StyledForm>
				<Paragraph bold>Twoje całkowite zapotrzebowanie:</Paragraph>
				<Paragraph>
					{demand ? demand + ' kcal' : ''} 
				</Paragraph>
            </StyledWrapper>
        </UserPageTemplate>
    )
}

export default Home;