import React, { useState } from 'react';
import Zoo from './Components/zoo/zoo.comp';

const AnimalsPage = () =>{
    let CatAnimals = [
        {
            id: "c1",
            name : 'Lion Enclosure',
            animals:[
                {
                id: "c1a1",
                name: "Lion1 ",
                age: 8,
                gender: "Male",
                },
                {
                id: "c1a2",
                name: "Lion2 ",
                age: 5,
                gender: "Female",
                }   
            ]
        },
        {
            id: "c2",
            name : 'Snake Enclosure',
            animals:[
                {
                    id: "c2a1",
                    name: "snake1",
                    age: 10,
                    gender: "Female",
                    },
                    {
                    id: "c2a2",
                    name: "snake2",
                    age: 15,
                    gender: "Male",
                    }      
            ]
        },
        {
            id: "c3",
            name : 'Panda Enclosure',
            animals:[
                {
                    id: "c3a1",
                    name: "panda1",
                    age: 8,
                    gender: "Male",
                    },
                    {
                    id: "c3a2",
                    name: "panda2",
                    age: 13,
                    gender: "Female",
                    }
                ]         
         },
         {
            id: "c4",
            name : 'Birds Enclosure',
            animals:[
                {
                    id: "c4a1",
                    name: "Bird1",
                    age: 8,
                    gender: "Male",
                    },
                    {
                    id: "c4a2",
                    name: "Bird2",
                    age: 13,
                    gender: "Female",
                    }
                ]         
         },
         {
            id: "c5",
            name : 'Caretakers',
            animals:[
                {
                    id: "c5a1",
                    name: "Julian Orozco",
                    age: 28,
                    gender: "Male",
                    },
                    {
                    id: "c5a2",
                    name: "Natalia Bernal",
                    age: 30,
                    gender: "Female",
                    }
                ]         
         },
         {
            id: "c6",
            name : 'Administrators',
            animals:[
                {
                    id: "c6a1",
                    name: "Vanessa Castro",
                    age: 40,
                    gender: "Female",
                    },
                    {
                    id: "c6a2",
                    name: "Valentin Arias",
                    age: 35,
                    gender: "Male",
                    }
                ]         
         }
         
        ];
        
    

    const [animals, setAnimals] =useState(CatAnimals);
    return(
        <>
    <Zoo 
    CatAnimals={animals}
    onAddAnimal={(newAnimalObj, enclosureId) => {
        //1. nuevo arreglo animals
        const newAnimals = [];
        for(let i=0; i<animals.length; i++){
            if (animals[i].id !== enclosureId){
                newAnimals.push(animals[i]);
                
            }  else {
            newAnimals.push(
                {
                    ...animals[i],
                    animals:[...animals[i].animals, newAnimalObj]
                }
            );
        }
    }
        //2 Cambiar el arreglo de "animals" a través de la funcion setAnimal
        setAnimals(newAnimals);
    }}
    
    />
    </>
    )
}
export default AnimalsPage;