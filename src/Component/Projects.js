import cal from "./assets/cal.jpeg";
import "./Projects.css";

export const Projects = () => {
  return (
    <>
      <div className="container text-center">
        <h1>This is my Projects</h1>
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
              <p>dbfibdfhaoidbasuyboiasniSBdandcnasl</p>
            </div>
          </div>
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
              <p>dbfibdfhaoidbasuyboiasniSBdandcnasl</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
