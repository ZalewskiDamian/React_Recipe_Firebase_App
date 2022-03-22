import {useState} from 'react';
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/pl';
import styled from 'styled-components';
import { device } from "../device";

const StyledWrapper = styled.div`
    padding: 10rem 1rem 9rem;
    text-align: center;

	@media ${device.tablet} {
		padding: 2.5rem 4rem;
	}
`;

const Dietplan = () => {
    const [selectedDay, setSelectedDay] = useState(null);

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
            <p>{selectedDay ? selectedDay.toLocaleDateString() : 'Wybierz dzień'}</p>
        </StyledWrapper>
    )
}

export default Dietplan