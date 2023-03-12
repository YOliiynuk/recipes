import {useState} from "react";
import {data as defaultData} from "../../helpers/data";
import RecipeType from "./RecipeType";
import "./../../app.css"

function Recipe(){
    const [data, setData] = useState(defaultData);

    return(
        <div className="app">

            <h1 className="title">Recipes</h1>

            <div className="types">
                {
                    data.map((value, index) =>  <RecipeType key ={index} data={value}/>)
                }
            </div>

        </div>
    );
}

export default Recipe;

