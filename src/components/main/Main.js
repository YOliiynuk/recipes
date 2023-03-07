import "./../../App"
import "./style.css";
import "./../../helpers/data"

function Main (props) {
  return (
      <div className="main">
        <img src={props.image}/>
        <h6>{props.name}</h6>
        <p>{props.description}</p>
      </div>
  )
}

export default Main;







