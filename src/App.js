import {useState} from "react";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import RecipeType from "./components/RecipeType/RecipeType";
import {data as defaultData} from "./helpers/data.js"
import RecipeList from "./components/RecipeList/RecipeList";
import {dataa as defaultDatta} from "./components/RecipeList/RecipeListData"

function App() {
    const [data, setData] = useState(defaultData);
    const [dataa, setDataa] = useState(defaultDatta)
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
                    dataa.map((value, index) => <RecipeList key={index} dataa={value}/> )
                }
            </div>
            </div>
        </div>
    )

}
export default App;