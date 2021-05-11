import React from 'react';
import Enclosures from '../enclosures/enclosures.comp';
import Animals from '../animals/animals.comp';

import './zoo.style.css';

const Zoo = (props) =>{
    return(
        <div className="zoo-container">
            <h1>Zoo</h1>
            <Enclosures CatAnimals={props.CatAnimals}

            onAddAnimal={props.onAddAnimal}
            />
           

        </div>
    )
}
export default Zoo;