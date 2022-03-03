import { db } from './firebase.config';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, addDoc, deleteDoc } from 'firebase/firestore'; 
import Popup from './components/Popup';

function App() {
    const [recipes, setRecipies] = useState([]);
    const [form, setForm] = useState({
        title: '',
        desc: '',
        ingredients: [],
        steps: []
    });
    const [popupActive, setPopupActive] = useState(false);

    const recipesCollectionRef = collection(db, "recipes");

    useEffect(() => {
        onSnapshot(recipesCollectionRef, snapshot => {
            setRecipies(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    viewing: false,
                    ...doc.data()
                }
            }))
        })
    },[]);

    const handleView = id => {
        const recipesClone = [...recipes];

        recipesClone.forEach(recipe => {
            if (recipe.id === id) {
                recipe.viewing = !recipe.viewing
            } else {
                recipe.viewing = false
            }
        })

        setRecipies(recipesClone)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (
            !form.title || 
            !form.desc ||
            !form.ingredients ||
            !form.steps
        ) {
            alert("please fill out all fields")
            return 
        }

        addDoc(recipesCollectionRef, form)

        setForm({
            title: '',
            desc: '',
            ingredients: [],
            steps: []
        })

        setPopupActive(false)
    }

    const handleIngredient = (e, i) => {
        const ingredientsClose = [...form.ingredients]

        ingredientsClose[i] = e.target.value;

        setForm({
            ...form,
            ingredients: ingredientsClose
        })
    }

    const handleStep = (e, i) => {
        const stepsClose = [...form.steps]

        stepsClose[i] = e.target.value;

        setForm({
            ...form,
            steps: stepsClose
        })
    }

    const handleIngredientCount = () => {
        setForm({
            ...form,
            ingredients: [...form.ingredients, ""]
        })
    }

    const handleStepCount = () => {
        setForm({
            ...form,
            steps: [...form.steps, ""]
        })
    }

    const removeRecipe = id => {
        deleteDoc(doc(db, "recipes", id))
    }

    return (
        <div className="App">
            <h1>Moje przepisy</h1>
            <button onClick={() => setPopupActive(!popupActive)}>Add recipe</button>
            <div className='recipes'>
                {recipes.map((recipe) => (
                    <div className='recipe' key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p dangerouslySetInnerHTML={{ __html: recipe.desc}}></p>
                        {recipe.viewing && <div>
                            <h4>Ingredients</h4>
                            <ul>
                                {recipe.ingredients.map((ingredient, i ) => (
                                    <li key={i}>{ingredient}</li>
                                ))}
                            </ul>
                            <h4>Steps</h4>
                            <ol>
                                {recipe.steps.map((step, i ) => (
                                    <li key={i}>{step}</li>
                                ))}
                            </ol>
                        </div>}
                        <div className="buttons">
                            <button onClick={() => handleView(recipe.id)}>View {recipe.viewing ? 'less' : 'more'}</button>
                            <button className="remove" onClick={() => removeRecipe(recipe.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <Popup 
                handleSubmit={handleSubmit}
                handleIngredient={handleIngredient}
                handleStep={handleStep}
                form={form}
                setForm={setForm}
                handleIngredientCount={handleIngredientCount}
                handleStepCount={handleStepCount}
                setPopupActive={setPopupActive}
                popupActive={popupActive}
            />
        </div>
    );
}

export default App;
