import React from 'react';


import './enclosureCatRow.style.css';

const enclosureCatRow = (props) =>{
    return( 
        
        <div class="enclosurecatrow-container">
            {props.categoryName}
        </div>  
    )
}
export default enclosureCatRow;