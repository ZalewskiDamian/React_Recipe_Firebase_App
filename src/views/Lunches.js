import { db } from '../firebase.config';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNutrions } from '../redux/userReducer';
import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/Card/Card';

const Lunchs = () => {
    console.log('lunches');
    const [lunches, setLunches] = useState([]);

    const lunchesCollectionRef = collection(db, "lunches");
    const dispatch = useDispatch();

    useEffect(() => {
        onSnapshot(lunchesCollectionRef, snapshot => {
            setLunches(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    },[]);

    const handleView = id => {
        const lunchesClone = [...lunches];

        lunchesClone.forEach(lunch => {
            if (lunch.id === id) {
                lunch.viewing = !lunch.viewing
            } else {
                lunch.viewing = false
            }
        })

        setLunches(lunchesClone)
    }

    const handleNutrions = (id, kcal, proteins, carbons, fats) => {
        const lunchesClone = [...lunches];

        lunchesClone.forEach(lunch => {
            lunch.id === id && dispatch(setNutrions({kcal, proteins, carbons, fats}))
        })
    }

    return (
        <GridTemplate>
            {lunches.map((lunch) => (
                <Card 
                    key={lunch.id}
                    image={lunch.image}
                    time={lunch.time}
                    kcal={lunch.kcal}
                    weight={lunch.weight}
                    proteins={lunch.proteins}
                    carbons={lunch.carbons}
                    fats={lunch.fats}
                    title={lunch.title}
                    desc={lunch.desc}
                    viewing={lunch.viewing}
                    ingredients={lunch.ingredients}
                    steps={lunch.steps}
                    id={lunch.id}
                    handleView={handleView}
                    handleNutrions={handleNutrions}
                />
            ))}
        </GridTemplate>
    )
}

export default Lunchs;