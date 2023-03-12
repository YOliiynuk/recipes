import React, { useState } from 'react';
import  "./RecipeListData";
import "./RecipeListStyle.css"

const RecipeList = ({data, setActiveElements}) => {
    const {image, name, items} = data
    const showMeClick = () => {
        setActiveElements (items)
    }
    return (
        <div className="recipeList">
            <img src={data.image} alt={data.name}/>
            <h3 className="background">{data.name}</h3>
            <button onClick={showMeClick}>Show Details!</button>
        </div>
    )
};

export default RecipeList;
