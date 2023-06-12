import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import "./Hero.css"; // Import the CSS file for Hero component
export const Hero = () => {
  useEffect(() => {
    // Code to be executed when the component mounts or when the dependencies change

    // Initialize the Typewriter effect
    const typewriter = new Typewriter(".typewriter-element", {
      autoStart: true,
      loop: true,
      delay: 40,
    });

    // Add strings to the Typewriter
    typewriter
      .typeString("I'm Web Developer")
      .pauseFor(3000) // Pause for 1 second after typing "Web developer"
      .deleteAll()
      .typeString("I'm Full Stack Developer")
      .pauseFor(3000) // Pause for 1 second after typing "Full stack developer"
      .deleteAll()
      .typeString("I'm UI/UX Designer")
      .pauseFor(3000) // Pause for 5 seconds after typing "TypeScript"
      .deleteAll()
      .start(); // Start the typewriter effect
  }, []);

  return (
    <>
      <div className="hero container ">
        <div className="hero-name text-center">
          <div className="greeting">
            <b>Welcome to my Portfolio!</b>
          </div>
          <>
            <i class="fa-solid fa-door-open"></i>
          </>

          <div className="typewriter-element animated-text "></div>
        </div>
      </div>
    </>
  );
};
