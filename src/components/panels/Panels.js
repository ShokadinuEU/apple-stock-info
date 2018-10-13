import React from 'react'
import './panels.scss'

const Panels = () => {
  return (
    <article className="panel-main">
      <div className="panel-container">
        <div className="panel-block">
          <i className="image-panel fas fa-globe-americas fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">Apple Infos</h3>
            <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel fas fa-cogs fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">Apple Infos</h3>
            <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
            <button>More here ></button>
          </div>
        </div>
        <div className="panel-block">
          <i className="image-panel far fa-lightbulb fa-3x"></i>
          <div className="info-panel">
            <h3 className="header-panel">Apple Infos</h3>
            <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
            <button>More here ></button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Panels
