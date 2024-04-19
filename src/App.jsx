import React from "react";
import Resume from "./Component/Resume";
import Interests from "./Component/Interests";
import Skills from "./Component/Skills";
import Education from "./Component/Education";
import Projects from "./Component/Projects";

const App = () => {
  return (
    <>
      <Resume />
      <Interests
        i1="Boxing"
        i2="Swimming"
        i3="Gaming"
        i4="Programming"
        i5="Gyming"/>

      <Skills
        s1 = "Core-Java"
        s2 = "JavaScript"
        s3 = "HTML 3"
        s4 = "CSS-TAILWIND"
        s5 = "REACT.js"
        s6 = "SQL"/>

        <Education
        e1 = "Master of Computer Application"
        e2 = "Bachelor of Computer Application"/>

        <Projects
        p1 = "Hotel Management system"
        p2 = "Employee Managemant System"
        p3 = "Paswoord Genertor"/>
    </>
  );
};

export default App;
