import React from 'react';
import './styles.css';


const Nosotros = () => {
    return (
    <>
        <div className="titulo">
            <h1>Nosotros</h1>
        </div>
        <div className="person">
  <div className="person-badge">
    <img className="normal" alt="" src="http://tech.custom-media.com/pics/t1.png"/>
    <img className="peculiar" alt="" src="http://tech.custom-media.com/pics/t2.png"/>
  </div>
  <h3>Sam Müller</h3>
  <strong>Business Development Director</strong>
  <div>
    Sam has over five years’ experience providing strategic direction on marketing and communications projects, and is responsible for ensuring clients' projects are delivered on time and within budget. Sam has an MBA from McBro University. 
  </div>
</div>


<div className="person">
  <div className="person-badge">
    <img className="normal" alt="" src="http://tech.custom-media.com/pics/joy1.png"/>
    <img className="peculiar" alt="" src="http://tech.custom-media.com/pics/joy2.png"/>
  </div>
  <h3>Joy Johnson</h3>
  <strong>Client Services Manager</strong>
  <div>
    By combining experience in strategy and multi-media management 
    with a solid technical background, Joy provides campaign and 
    creative direction to a diverse array of projects.
  </div>
</div>


<div className="person">
  <div className="person-badge">
    <img className="normal" alt="" src="http://tech.custom-media.com/pics/i1.png"/>
    <img className="peculiar" alt="" src="http://tech.custom-media.com/pics/i2.png"/>
  </div>
  <h3>Christopher Dolan</h3>
  <strong>Senior Editor</strong>
  <div>
    A 20-year veteran of media and publishing, Christopher is an award-winning writer, editor, and designer who has worked on magazines and directed marketing and communications in England and the United States. 
  </div>
</div>
</>
      
    );
};

export default Nosotros;

