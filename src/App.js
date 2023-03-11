import {useState} from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import RecipeType from "./components/RecipeType/RecipeType";
import {data as defaultData} from "./helpers/data.js"
import RecipeList from "./components/RecipeList/RecipeList";
import {dataa as defaultDataa} from "./components/RecipeList/RecipeListData"
import RecipeDetilesItem from "./components/RecipeDetiles/RecipeDetilesItem";


function App() {
    const [data, setData] = useState(defaultData);
    const [dataa, setDataa] = useState(defaultDataa);
    const [activeElements, setActiveElements] = useState([]);
    return(
        <div className="App">
            <Navbar/>

           {/* <Header/>

            <div className="app">

                <h1 className="title">Recipes</h1>

                <div className="types">
                    {
                        data.map((value, index) =>  <RecipeType key ={index} data={value}/>)
                    }
                </div>

            </div>*/}

            <div className="recipe_container">
                <div className="recipe_list">
                {
                    dataa.map((value, index) => <RecipeList key={index} data={value} setActiveElements={setActiveElements}/> )
                }
            </div>
            </div>

            <div className="types">
                {
                   activeElements && activeElements.map((value, index)=> <RecipeDetilesItem data={value} key={index}  /> )
                }
            </div>
        </div>
    )

}
export default App;