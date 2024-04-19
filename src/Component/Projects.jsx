import React from 'react'

 const Projects = ({p1,p2,p3}) => {
  return (
    <>
    <h3>Projects</h3>
    <ol>
        <li>{p1}</li>
        <li>{p2}</li>
        <li>{p3}</li>
    </ol>
    </>
  )
}

export default Projects;
