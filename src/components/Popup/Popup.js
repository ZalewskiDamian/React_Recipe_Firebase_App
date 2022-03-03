import React from 'react';
import styled from 'styled-components';

const StyledPopupWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${({popupActive}) => (popupActive ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    z-index: 10;
    text-align: left;
`;

const StyledPopupInner = styled.div`
    background-color: var(--dark);
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 480px;
    overflow: auto;
    max-height: calc(100vh - 4rem);
`;

const StyledFormGroup = styled.div`
    margin-bottom: 1rem;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;

const Popup = ({handleSubmit, handleIngredient, handleStep, form, setForm, handleIngredientCount, handleStepCount, setPopupActive, popupActive}) => {
    return (
        <StyledPopupWrapper popupActive={popupActive}>
            <StyledPopupInner>
                <h2>Add a new recipe</h2>
                <form onSubmit={handleSubmit}>
                    <StyledFormGroup>
                        <StyledLabel>Title</StyledLabel>
                        <input 
                            type="text" 
                            value={form.title} 
                            onChange={(e) => setForm({...form, title: e.target.value})} 
                        />
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Description</StyledLabel>
                        <textarea 
                            type="text" 
                            value={form.desc} 
                            onChange={(e) => setForm({...form, desc: e.target.value})} 
                        />
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Ingredients</StyledLabel>
                        {
                            form.ingredients.map((ingredient, i) => (
                                <input 
                                    type="text" 
                                    key={i}
                                    value={ingredient} 
                                    onChange={(e) => handleIngredient(e, i) } 
                                />
                            ))
                        }
                        <button type='button' onClick={handleIngredientCount}>Add ingredient</button>
                    </StyledFormGroup>
                    <StyledFormGroup>
                        <StyledLabel>Steps</StyledLabel>
                        {
                            form.steps.map((step, i) => (
                                <textarea 
                                    type="text" 
                                    key={i}
                                    value={step} 
                                    onChange={(e) => handleStep(e, i) } 
                                />
                            ))
                        }
                        <button type='button' onClick={handleStepCount}>Add step</button>
                    </StyledFormGroup>
                    <div className="buttons">
                        <button type='submit'>Submit</button>
                        <button 
                            type='button' 
                            className='remove' 
                            onClick={() => setPopupActive(false)}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </StyledPopupInner>
        </StyledPopupWrapper>
    )
}

export default Popup;