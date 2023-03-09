import React from "react";
import "./RecipeType.css";
import "./../../helpers/data"

const RecipeType = ({data}) => {
    return(

        <div className="recipe">
            <div className="">
                <img src={data.image} alt="No photo"/>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
        </div>

    )
}
export default RecipeType;