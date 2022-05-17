import "./Home.css";
import bg from "../../assets/images/bg.svg";
import bgIn from "../../assets/images/bg in.svg";
import number from "../../assets/images/number.svg";
import res1 from "../../assets/images/res1.svg";
import res2 from "../../assets/images/res2.svg";
import res3 from "../../assets/images/res3.svg";
import res4 from "../../assets/images/res4.svg";

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
      <div className="server-order">
        <h2>
          Trusted by 5,000+ restaurants around <span>the world</span>
        </h2>
        <ul>
          <li>
            <Link to="/">
              <img src={res1} alt="" />
            </Link>
            <Link to="/">
              <img src={res2} alt="" />
            </Link>
            <Link to="/">
              <img src={res3} alt="" />
            </Link>
            <Link to="/">
              <img src={res4} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
