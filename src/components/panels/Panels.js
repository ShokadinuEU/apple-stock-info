import React from 'react'
import './panels.scss'

const Panels = () => {
  return (
    <panels className="panel-main">
      <div className="panel-container">
        <div className="panel-block">
          <span className="image-panel">Image</span>
          <h3 className="header-panel">Apple Infos</h3>
          <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
          <button>More here ></button>
        </div>
        <div className="panel-block">
          <span className="image-panel">Image</span>
          <h3 className="header-panel">Apple Infos</h3>
          <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
          <button>More here ></button>
        </div>
        <div className="panel-block">
          <span className="image-panel">Image</span>
          <h3 className="header-panel">Apple Infos</h3>
          <p className="text-panel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil provident nemo id.</p>
          <button>More here ></button>
        </div>
      </div>
    </panels>
  )
}

export default Panels
