import "./Home.css";
import bg from "../../assets/images/bg.svg";
import bgIn from "../../assets/images/bg in.svg";
import number from "../../assets/images/number.svg";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="container-home">
        <div className="left-section">
          <p>Food Delivery Service</p>
          <h1>Delicious food at your fingertips</h1>
          <h4>
            A ultricies eget condimentum sed faucibus enim maecenas variusd
            dolor sitegestas hendrerit et maecenas habitant mattis
          </h4>
          <Link className="home-link" to="/">
            To order food
          </Link>
          <div className="context">
            <img src={number} alt="" />
          </div>
        </div>
        <div className="middle-section">
          <img src={bgIn} alt="" />
        </div>
        <div className="right-section">
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
