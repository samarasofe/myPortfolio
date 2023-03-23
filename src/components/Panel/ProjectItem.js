import React from 'react'

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">

        <div style={ {backgroundImage: `url(${image})` }} className="bgImage" />        
        <h2> {name} </h2>
    </div>
  );
}

export default ProjectItem;

