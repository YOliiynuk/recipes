import "./../../App"
import "./style.css";
import "../../helpers/Data"
import MainItem from "../mainitem/MainItem";


function Main (props) {
  return (
      <div className="main">
          {
              props.data.map(user => {<MainItem user={user}/>})
          }
      </div>
  );
}

export default Main;







