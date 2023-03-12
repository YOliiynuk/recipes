import "./app.css";
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./Home";
import RecipeDetalisList from "./RecipeDetalisList";
import ScrollToTop from "./utilits/ScrollToTop";



function App() {
    return(
        <div className="App">
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>;
                    <Route path="/list" element={<RecipeDetalisList/>}/>;
                </Routes>
            </Router>



        </div>
    )

}
export default App;