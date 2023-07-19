import cal from "./assets/cal.jpeg";
import weather from "./assets/Weather.png";
import solar from "./assets/solar.png";
import crypto from "./assets/Crypto.jpeg";
import "./Projects.css";

export const Projects = () => {
  const inputs = [
    {
      href: "https://react-calculator-758j5dydq-sushmzn9.vercel.app/",
      title: "Calculator",
      src: cal,
      p: " Developed user-friendly React Calculator using React, HTML, CSS, and JavaScript.",
    },
    {
      href: "https://sushmzn9.github.io/weather-app/",
      title: "Weather Tracker",
      src: weather,
      p: " Created real-time weather app with HTML, CSS, JavaScript, and weather data API.",
    },
    {
      href: "https://sushmzn9.github.io/solarsystem/",
      title: "Solar System",
      src: solar,
      p: "   Created a solar system using HTML and CSS to visually represent the planets and their orbits in a web-based interface. ",
    },
    {
      href: " https://sushmzn9.github.io/cryptoapi/",
      title: "Crypto Tracker Website",
      src: crypto,
      p: "   A crypto tracker with an API tracks the market value of the top 100 cryptocurrencies in real-time, providing users with up-to-date information on prices, market capitalization, and trading volumes. ",
    },
  ];
  return (
    <div className="container text-center" id="projects">
      <h1>Projects</h1>
      <div className="row">
        {inputs.map((item, i) => (
          <div className="col">
            <div key={i}>
              <a href={item.href}>
                <img src={item.src} alt="" />
              </a>
            </div>
            <div className="title">
              <a href={item.href}>
                <h3>{item.title}</h3>
              </a>
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
