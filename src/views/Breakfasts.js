import { db } from '../firebase.config';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore'; 
import Popup from '../components/Popup/Popup';
import GridTemplate from '../templates/GridTemplate';
import Card from '../components/Card/Card';
import { useDispatch } from 'react-redux';
import { setNutrions } from '../redux/userSlice';

const Breakfasts = () => {
    console.log('breakfafst')
    const [breakfasts, setBreakfasts] = useState([]);
    const dispatch = useDispatch();
    // const [form, setForm] = useState({
    //     title: '',
    //     desc: '',
    //     ingredients: [],
    //     steps: []
    // });
    // const [popupActive, setPopupActive] = useState(false);

    const breakfastsCollectionRef = collection(db, "breakfasts");

    useEffect(() => {
        onSnapshot(breakfastsCollectionRef, snapshot => {
            setBreakfasts(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    },[]);

    const handleView = id => {
        const breakfastsClone = [...breakfasts];

        breakfastsClone.forEach(breakfast => {
            if (breakfast.id === id) {
                breakfast.viewing = !breakfast.viewing
            } else {
                breakfast.viewing = false
            }
        })

        setBreakfasts(breakfastsClone)
    }

    const handleNutrions = (id, proteins, carbons, fats) => {
        const breakfastsClone = [...breakfasts];

        breakfastsClone.forEach(breakfast => {
            breakfast.id === id && dispatch(setNutrions({proteins, carbons, fats}))
        })
    }

    // const handleSubmit = e => {
    //     e.preventDefault();

    //     if (
    //         !form.title || 
    //         !form.desc ||
    //         !form.ingredients ||
    //         !form.steps
    //     ) {
    //         alert("please fill out all fields")
    //         return 
    //     }

    //     addDoc(recipesCollectionRef, form)

    //     setForm({
    //         title: '',
    //         desc: '',
    //         ingredients: [],
    //         steps: []
    //     })

    //     setPopupActive(false)
    // }

    // const handleIngredient = (e, i) => {
    //     const ingredientsClose = [...form.ingredients]

    //     ingredientsClose[i] = e.target.value;

    //     setForm({
    //         ...form,
    //         ingredients: ingredientsClose
    //     })
    // }

    // const handleStep = (e, i) => {
    //     const stepsClose = [...form.steps]

    //     stepsClose[i] = e.target.value;

    //     setForm({
    //         ...form,
    //         steps: stepsClose
    //     })
    // }

    // const handleIngredientCount = () => {
    //     setForm({
    //         ...form,
    //         ingredients: [...form.ingredients, ""]
    //     })
    // }

    // const handleStepCount = () => {
    //     setForm({
    //         ...form,
    //         steps: [...form.steps, ""]
    //     })
    // }

    return (
        <GridTemplate>
            {/* <button onClick={() => setPopupActive(!popupActive)}>Add recipe</button> */}
            {breakfasts.map((recipe) => (
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
                    handleNutrions={handleNutrions}
                />
            ))}
            {/* <Popup 
                handleSubmit={handleSubmit}
                handleIngredient={handleIngredient}
                handleStep={handleStep}
                form={form}
                setForm={setForm}
                handleIngredientCount={handleIngredientCount}
                handleStepCount={handleStepCount}
                setPopupActive={setPopupActive}
                popupActive={popupActive}
            /> */}
        </GridTemplate>
    )
}

export default Breakfasts;