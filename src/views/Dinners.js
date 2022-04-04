// import { db } from '../firebase.config';
import { useState, useEffect } from 'react';
// import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/recipeReducer';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/Card/Card';

const Dinners = () => {
    console.log('dinners');
    const [dinners, setDinners] = useState([]);

    // const dinnersCollectionRef = collection(db, "dinners");
    const dispatch = useDispatch();

    useEffect(() => {
        // onSnapshot(dinnersCollectionRef, snapshot => {
        //     setDinners(snapshot.docs.map(doc => {
        //         return {
        //             id: doc.id,
        //             viewing: false,
        //             ...doc.data()
        //         }
        //     }))
        // })
    },[]);

    // const handleView = id => {
    //     const dinnersClone = [...dinners];

    //     dinnersClone.forEach(dinner => {
    //         if (dinner.id === id) {
    //             dinner.viewing = !dinner.viewing
    //         } else {
    //             dinner.viewing = false
    //         }
    //     })

    //     setDinners(dinnersClone)
    // }

    const handleRecipe = (id, title, kcal, proteins, carbons, fats) => {
        const newRecipe = {
            id: id,
            title: title,
            kcal: kcal,
            proteins: proteins,
            carbons: carbons,
            fats: fats, 
        }

        dispatch(addRecipe(newRecipe));
    }

    return (
        <GridTemplate>
            {dinners.map((dinner) => (
                <Card 
                    key={dinner.id}
                    image={dinner.image}
                    time={dinner.time}
                    kcal={dinner.kcal}
                    weight={dinner.weight}
                    proteins={dinner.proteins}
                    carbons={dinner.carbons}
                    fats={dinner.fats}
                    title={dinner.title}
                    desc={dinner.desc}
                    viewing={dinner.viewing}
                    ingredients={dinner.ingredients}
                    steps={dinner.steps}
                    id={dinner.id}
                    // handleView={handleView}
                    handleRecipe={handleRecipe}
                />
            ))}
        </GridTemplate>
        
    )
}

export default Dinners;