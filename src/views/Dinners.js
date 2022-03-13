import { db } from '../firebase.config';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/Card/Card';

const Dinners = () => {
    console.log('dinners');
    const [dinners, setDinners] = useState([]);

    const dinnersCollectionRef = collection(db, "dinners");

    useEffect(() => {
        onSnapshot(dinnersCollectionRef, snapshot => {
            setDinners(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    },[]);

    const handleView = id => {
        const dinnersClone = [...dinners];

        dinnersClone.forEach(dinner => {
            if (dinner.id === id) {
                dinner.viewing = !dinner.viewing
            } else {
                dinner.viewing = false
            }
        })

        setDinners(dinnersClone)
    }

    return (
        <GridTemplate>
            {dinners.map((recipe) => (
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

export default Dinners;