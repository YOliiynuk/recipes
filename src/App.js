import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const data = [
    {
        id: 1,
        name: "Dessert",
        description: "there is so many dessert recipes",
        image: "https://i.imgur.com/v8Irhk9.png",

    },
    {
        id: 2,
        name: "Drinks",
        description: "there is so many dessert recipes",
        image: "https://i.imgur.com/GGCP1rj.png",
    },
    {
        id: 3,
        name: "Main Dishs",
        description: "there is so many dessert recipes",
        image: "https://i.imgur.com/OMH5x2A.png",
    },
    {
        id: 4,
        name: "Side Dishs",
        description: "there is so many dessert recipes",
        image: "https://i.imgur.com/OMH5x2A.png",
    },
];

function App() {
    return(
        <div className="App">
        <Navbar/>

        <Header/>

        <Main data={data}/>

        </div>
    )
}
export default App;
