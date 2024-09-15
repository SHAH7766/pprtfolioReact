import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FrameWroks from "./FrameWroks";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from 'react-router-dom'
const Introduction = () => {
  return (
    <>
      <div className="container">
      <h1 className="intro"
             
             >
              Hi,I'm Shah hussain
              </h1>
              <span className="type" style={{ color: "blue", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[" a front end developer"," a React.js developer","Node.js developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
    <center>
     <Link to='/con'> <button className="btnHire">Hire Me</button></Link>
      </center>  
      </div>
      <FrameWroks/>
      <Projects/>
    </>
  );
};

export default Introduction;
