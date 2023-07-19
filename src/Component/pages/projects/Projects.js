import cal from "./assets/cal.jpeg";
import weather from "./assets/Weather.png";
import solar from "./assets/solar.png";
import crypto from "./assets/Crypto.jpeg";
import not from "./assets/not.jpg";
import "./Projects.css";

export const Projects = () => {
  const inputs = [
    {
      href: " https://zany-cyan-viper-robe.cyclic.app/",
      title: "Not to do List",
      src: not,
      p: "Full-stack Not To Do app with CRUD functionality: user auth, lists (CRUD), tasks (add/remove), recurring tasks, notifications, search/filters, dark mode, responsive design, user settings, performance optimized.",
    },
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
      href: " https://sushmzn9.github.io/cryptoapi/",
      title: "Crypto Tracker Website",
      src: crypto,
      p: "   A crypto tracker with an API tracks the market value of the top 100 cryptocurrencies in real-time, providing users with up-to-date information on prices, market capitalization, and trading volumes. ",
    },
    {
      href: "https://sushmzn9.github.io/solarsystem/",
      title: "Solar System",
      src: solar,
      p: "   Created a solar system using HTML and CSS to visually represent the planets and their orbits in a web-based interface. ",
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
