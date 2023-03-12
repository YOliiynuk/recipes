import React from 'react';
import './RecipeDetilesItem.css'


const RecipeDetilesItem = ({data}) => {
    const {name, image, description, category,timeForDone, recipe} = data


    return (
        <div className="recipeDetilesItem_row">
            <div className="recipeDetilesItem">
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <h4>{`Category: ${category}`}</h4>
            <h4>{`Time for done: ${timeForDone}`}</h4>
            <h5>{`Descriptions: ${description}`}</h5>
        </div>
            <div className="recipeDetalesItem2_row">
                <div className="recipeDetilesItem2">
                    <h2>{recipe}</h2>
                </div>
                <div className="button_detaild_row">
                    <button className="button_detaild">Close Details</button>
                </div>
            </div>


        </div>
    );
};


export default RecipeDetilesItem;


