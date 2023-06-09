import cal from "./assets/cal.jpeg";
import weather from "./assets/Weather.png";
import solar from "./assets/solar.png";
import crypto from "./assets/Crypto.jpeg";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div className="container text-center" id="projects">
        <h1>Projects</h1>
        <div className="row">
          <div className="col">
            <div>
              <a href="https://react-calculator-758j5dydq-sushmzn9.vercel.app/">
                <img src={cal} alt="" />
              </a>
            </div>
            <div className="title">
              <a href="https://react-calculator-758j5dydq-sushmzn9.vercel.app/">
                <h3>Calculator</h3>
              </a>
              <p>
                Developed user-friendly React Calculator using React, HTML, CSS,
                and JavaScript.
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <a href="https://sushmzn9.github.io/weather-app/">
                <img src={weather} alt="" />
              </a>
            </div>
            <div className="title">
              <a href="https://sushmzn9.github.io/weather-app/">
                <h3>Weather Tracker</h3>
              </a>
              <p>
                Created real-time weather app with HTML, CSS, JavaScript, and
                weather data API.
              </p>
            </div>
          </div>

          <div className="col">
            <div>
              <a href="https://sushmzn9.github.io/solarsystem/">
                <img src={solar} alt="" />
              </a>
            </div>
            <div className="title">
              <a href="https://sushmzn9.github.io/solarsystem/">
                <h3>Solar System</h3>
              </a>
              <p>
                Created a solar system using HTML and CSS to visually represent
                the planets and their orbits in a web-based interface.
              </p>
            </div>
          </div>
          <div className="col">
            <div>
              <a href="https://sushmzn9.github.io/cryptoapi/">
                <img src={crypto} alt="" />
              </a>
            </div>
            <div className="title">
              <a href="https://sushmzn9.github.io/cryptoapi/">
                <h3>Crypto Tracker Website</h3>
              </a>
              <p>
                A crypto tracker with an API tracks the market value of the top
                100 cryptocurrencies in real-time, providing users with
                up-to-date information on prices, market capitalization, and
                trading volumes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
