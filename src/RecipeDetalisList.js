import {useState} from "react";
import {dataa as defaultDataa} from "./components/RecipeList/RecipeListData";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeDetilesItem from "./components/RecipeDetiles/RecipeDetilesItem";
import {data as defaultData} from "./helpers/data";

function RecipeDetalisList(){

    const [data, setData] = useState(defaultData);
    const [dataa, setDataa] = useState(defaultDataa);
    const [activeElements, setActiveElements] = useState([]);

    return(
        <div className="recipe_container">
            <div className="recipe_list">
                {
                    dataa.map((value, index) => <RecipeList key={index} data={value} setActiveElements={setActiveElements}/> )
                }
            </div>

            <div className="details_style">
                <div className="types">
                    {
                        activeElements && activeElements.map((value, index)=> <RecipeDetilesItem data={value} key={index}  /> )
                    }
                </div>
            </div>
        </div>
    )
};

export default RecipeDetalisList;