import "./Home.css";
import bg from "../../assets/images/bg.svg";
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
          <Link to="/">Onlayn to order food</Link>
        </div>
        <div className="middle-section">
          <img src={bg} alt="" />
        </div>
        <div className="right-section">c</div>
      </div>
    </div>
  );
}

export default Home;
