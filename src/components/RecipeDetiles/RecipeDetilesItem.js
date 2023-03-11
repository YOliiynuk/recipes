import React from 'react';
import './RecipeDetilesItem.css'


const RecipeDetilesItem = ({data}) => {
    const {name, description, ingredients} = data
    return (
        <div className="recipeDetilesItem">
        <h2>{name}</h2>
            <p>description</p>
            <ul>
                {
                    ingredients.map((value, index)=> <li key={index}>{value}</li> )
                }
            </ul>

        </div>
    );
};

export default RecipeDetilesItem;
