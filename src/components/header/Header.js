import "./style.css";
import burger from "./burger.png"

const Header = () => {
  return(
    <header className="header">
      <div className="container_head">
        <div className="header_item">
          <div className="header_text">
              <h3>Yummy Recipes</h3>
              <p>we have a lot of yummy recipes from <br/> all
                  aruond the world.</p>
              <button className="button">See recipes</button>
          </div>
          <div className="header_img"><img src={burger} alt="burger"/></div>
        </div>
      </div>
    </header>

  );
}

export default Header;