import React from 'react';
import maleImg from '../img/male.png';
import femaleImg from '../img/female.png';

import './enclosureRow.style.css';

const EnclosureRow = (props) =>{

    return( 
        <div className="enclosurerow-container">
            <div>
                <table className="table">
                    <td>
                        {props.animals.name}
                    </td>
                    <td>
                        
                        {
                        props.animals.age === '0'
                        ?
                        console.log("el numero no puede ser 0")
                        :
                        <span>{props.animals.age}</span>
                        } 
                    </td>
                    <td>
                        {
                        props.animals.gender === "Male" 
                        ?
                        <span>{props.animals.gender}<img src={maleImg} className="male-img"></img></span>   
                        :
                        <span>{props.animals.gender}<img src={femaleImg} className="female-img"></img></span>
                        }   
                    </td>
            
            </table>
            </div>
            </div>
    )
}
export default EnclosureRow;
