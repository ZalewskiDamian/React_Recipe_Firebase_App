import { db } from '../firebase.config';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/Card/Card';

const Lunchs = () => {
    console.log('lunches');
    const [lunches, setLunches] = useState([]);

    const lunchesCollectionRef = collection(db, "recipes");

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
    return (
        <GridTemplate>
            {lunches.map((recipe) => (
                <Card 
                    key={recipe.id}
                    image={recipe.image}
                    time={recipe.time}
                    weight={recipe.weight}
                    proteins={recipe.proteins}
                    carbons={recipe.carbons}
                    fats={recipe.fats}
                    title={recipe.title}
                    desc={recipe.desc}
                    viewing={recipe.viewing}
                    ingredients={recipe.ingredients}
                    steps={recipe.steps}
                    id={recipe.id}
                    handleView={handleView}
                />
            ))}
        </GridTemplate>
    )
}

export default Lunchs;