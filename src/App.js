import "./App.css";
import CountDown from "./components/CountDown";
import FacebookIcon from "./images/icon-facebook.svg";
import PinterestIcon from "./images/icon-pinterest.svg";
import InstagramkIcon from "./images/icon-instagram.svg";

function App() {
  const targetDate = new Date("2024-01-19T23:59:59");
  return (
    <div className="App">
      <section className="hero">
        <div className="pattern-overlay">
          <CountDown targetDate={targetDate} />

          <div className="pattern-hills-box">
            <div className="socials-wrapper">
              <div className="socials-inner-wrapper">
                <img src={FacebookIcon} alt="" className="social-icon" />
                <img src={PinterestIcon} alt="" className="social-icon" />
                <img src={InstagramkIcon} alt="" className="social-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
