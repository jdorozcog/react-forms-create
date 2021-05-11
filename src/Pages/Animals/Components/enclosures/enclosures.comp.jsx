import React, { useState } from 'react';
import EnclosureCatRow from '../enclosureCatRow/enclosureCatRow.comp';
import EnclosureRow from '../enclosureRow/enclosureRow.comp';


import './enclosures.style.css';
import '../animals/animals.style.css';

const Enclosures = (props) =>{
    const [enclosure, setEnclosure] = useState('');
    const [enclosure1, setEnclosure1] = useState('');
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [age, setAge] = useState('');
    const [age1, setAge1] = useState('');
    const [gender, setGender] = useState('');
    const [gender1, setGender1] = useState('');

    const addEnclosure = (event) => {
        event.preventDefault();
        const newAnimal = {
                id: name,
                name: name,
                age: age,
                gender: gender,

        };
        props.onAddAnimal(newAnimal, enclosure);
        console.log(enclosure);
        console.log(newAnimal);
    }
    const addEnclosure1 = (event) => {
        event.preventDefault();
        const newAnimal1 = {
                id: name1,
                name: name1,
                age: age1,
                gender: gender1,

        };
        props.onAddAnimal(newAnimal1, enclosure1);
        console.log(enclosure1);
        console.log(newAnimal1);
    }

    return(
        <div>
        <div className="enclosures-container">
            {props.CatAnimals.map((category)=>{
                return (<React.Fragment key={category.id}>
                    <EnclosureCatRow categoryName={category.name}/>
                    {category.animals.map((animal)=>{
                        return (
                            <EnclosureRow 
                            key={animal.id}
                            animals={animal}
                            />
                        );
                    })}
                </React.Fragment>
                );
            })}
        </div>

        <tbody className="animals-container">
        <div >
        
        <div className="container">
            <form>
            <table className="table">
        <tr>
            <td>
            <h1>Animals</h1>
            </td>
        </tr>

        <tr>
            <td>
                <select
                    type="text"
                    className="input"
                    value={enclosure}
                    onChange={(event)=>{
                    setEnclosure(event.target.value);
                    }}
                >   
                <option value ="c1" >Lion Enclosure </option>
                <option value ="c2">Snake Enclosure </option>
                <option value ="c3">Panda Enclosure </option>
                <option value ="c4">Birds Enclosure </option>
                </select>
            </td>
        </tr>

        <tr><td>Name: </td></tr>
        <tr>
            <td>
                <input 
                type="text"
                className="input"
                value={name}
                onChange={(event)=>{
                    setName(event.target.value);

                }}
                
                />
            </td>
        </tr>

        <tr><td>Age: </td></tr>
        <tr>
            <td>
                <input 
                type="number"
                className="input"
                min="0"
                value={age}
                onChange={(event)=>{
                    setAge(event.target.value);
                }}
                />
            </td>
        </tr>

        <tr><td>Gender: </td></tr>
        <tr>
            <td>
            <select
                value={gender}
                className="input"
                onChange={(event)=>{
                setGender(event.target.value);
                }}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </td>
        </tr>
        <tr>
            <td>
                <button
                className="buttom"
                    onClick={addEnclosure}
                >
                    Add Animal
                </button>
            </td>
        </tr>
        
        </table>
        
    </form>
    </div>
    <div className="container">
    <form>
            
            <table className="table">
        <tr>
            <td>
            <h1>Caretakers</h1>
            </td>
        </tr>

        <tr>
            <td>
                <select
                    type="text"
                    className="input"
                    value={enclosure1}
                    onChange={(event)=>{
                    setEnclosure1(event.target.value);
                    }}
                >   
                <option value ="c5">Caretakers </option>
                <option value ="c6">Administrators </option>
                </select>
            </td>
        </tr>

        <tr><td>Name: </td></tr>
        <tr>
            <td>
                <input 
                type="text"
                className="input"
                value={name1}
                onChange={(event)=>{
                    setName1(event.target.value);

                }}
                
                />
            </td>
        </tr>

        <tr><td>Age: </td></tr>
        <tr>
            <td>
                <input 
                type="number"
                className="input"
                min="0"
                value={age1}
                onChange={(event)=>{
                    setAge1(event.target.value);
                }}
                />
            </td>
        </tr>

        <tr><td>Gender: </td></tr>
        <tr>
            <td>
            <select
                value={gender1}
                className="input"
                onChange={(event)=>{
                setGender1(event.target.value);
                }}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            </td>
        </tr>
        <tr>
            <td>
                <button
                className="buttom"
                    onClick={addEnclosure1}
                >
                    Add CareTaker
                </button>
            </td>
        </tr>
        
        </table>
        
    </form>
    </div>
    </div>
    
    
    </tbody>
        </div>
    );
}




export default Enclosures;