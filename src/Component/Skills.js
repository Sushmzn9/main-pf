import "./Skills.css";
import React from "react";

export const Skills = () => {
  return (
    <div className="container text-center" id="skills">
      <h1 className="skills-name">Skills</h1>
      <div className="row skill-row">
        <div className="col">
          <div className="Skills-p">
            <p>
              MongoDB: NoSQL, document-based, CRUD, indexing, performance
              optimization, data modeling, Mongoose
            </p>
            <p>
              Express.js: RESTful APIs, routing, middleware, authentication,
              authorization, error handling, validation, template engines
            </p>
            <p>
              React: Components, JSX, virtual DOM, UI components, state
              management, React hooks, Redux, React Router, lifecycle methods
            </p>
            <p>
              Node.js: Server-side JavaScript, event-driven, non-blocking I/O,
              NPM, package management, Express.js integration
            </p>
            <p>
              MERN Stack: Full stack development, MongoDB, Express.js, React,
              Node.js, JavaScript, RESTful APIs
            </p>
          </div>
        </div>
        <div className="row wrapper">
          <div className="solar-system">
            <div className="Sun">M.E.R.N Developer</div>
            <div className="Mercury">
              <div className="s">
                <i className="img fa-brands fa-html5 fa-2xl"></i>
              </div>
            </div>
            <div className="Venus">
              <div className="s1">
                <i className="img fa-brands fa-css3-alt fa-2xl"></i>
              </div>
            </div>
            <div className="Earth">
              <div className="s2">
                <i className="img fa-brands fa-figma fa-2xl"></i>
              </div>
            </div>
            <div className="Mars">
              <div className="s3">
                <i className="img fa-brands fa-github fa-2xl"></i>
              </div>
            </div>
            <div className="Jupiter">
              <div className="s4">
                <i className="img fa-brands fa-js fa-2xl"></i>
              </div>
            </div>
            <div className="Saturn">
              <div className="s5">
                <i className="img fa-brands fa-react fa-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
