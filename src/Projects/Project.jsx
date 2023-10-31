import React from 'react'
import data from '../Data/Data'
import './Project.css'


const Project = () => {
  return (
    <div >
      <div className='projects'>
        {
          data.map((each) => {
            return <div className="card">
              <h1>{each.title}</h1>
              <img src={each.image} alt='' width='70%' height='40%' />
              <p>{each.para}</p>
              <div className='buttons'>
                <button ><a href={each.visit} target='_blank' style={{ textDecoration: "None" }}>Visit</a></button>
                <button><a href={each.source} target='_blank' style={{ textDecoration: "None" }}>Source</a></button>
              </div>
            </div>
          })
        }

      </div>

    </div>
  )
}

export default Project
