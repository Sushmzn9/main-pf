import "./Aboutme.css";
import Sushan from "./Sushan.jpeg";
export const Aboutme = () => {
  return (
    <section id="about-me" className="container mt-3 py-5">
      <div>
        <h1 className="sus">About Me</h1>
      </div>
      <div className="row main">
        <div className="col-md-4 mb-5">
          <img className="img" src={Sushan} alt="my" width="100%" />
        </div>
        <div className="col-md-7">
          <div className="Aboutme">
            Introducing myself, Sushan Maharjan, a highly motivated full stack
            software developer proficient in the M.E.R.N stack. With hands-on
            experience from a bootcamp and a passion for innovative solutions, I
            am committed to continuous learning. My expertise in front-end and
            back-end development, along with creative problem-solving skills,
            makes me a valuable asset to any team. Explore my portfolio to
            witness the impact of my software development projects.
          </div>
        </div>
      </div>
    </section>
  );
};
