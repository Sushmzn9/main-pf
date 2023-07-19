import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { motion } from "framer-motion";

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
      .typeString("I'm Sushan Maharjan")
      .pauseFor(4000) // Pause for 1 second after typing "Web developer"
      .deleteAll()
      .typeString("I'm Full Stack Developer")
      .pauseFor(3000) // Pause for 1 second after typing "Full stack developer"
      .deleteAll()
      .typeString("I'm Web Developer")
      .pauseFor(3000) // Pause for 5 seconds after typing "TypeScript"
      .deleteAll()
      .start(); // Start the typewriter effect
  }, []);

  return (
    <>
      <div className="hero container " id="home">
        <div className="hero-name text-center">
          <div className="greeting">
            <motion.div
              initial={{ x: -100000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",

                delay: 0.4,
              }}
            >
              <b>Welcome to my Portfolio!</b>
              <>
                <i class="fa-solid fa-door-open"></i>
              </>
            </motion.div>
          </div>

          <div className="typewriter-element animated-text "></div>
        </div>
      </div>
    </>
  );
};
