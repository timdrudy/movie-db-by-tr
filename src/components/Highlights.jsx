import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/Highlight'

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
            <h2 className="section__title">
                What Makes <span className='purple'>Movies</span> so Great?
            </h2>
            <div className="highlight__wrapper">
                <Highlight icon={<FontAwesomeIcon icon="dollar-sign" />} 
                title="Free to Use"
                para="Explore our free database of titles"
                />
                <div className="highlight">
                    <div className="highlight__img">
                        
                    </div>
                    <h3 className='highlight__subtitle'></h3>
                    <p className='highlight__para'>
                        
                    </p>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                        <FontAwesomeIcon icon="pizza-slice" />
                    </div>
                    <h3 className='highlight__subtitle'>Easy to Use</h3>
                    <p className='highlight__para'>
                        With a few quick clicks, find the info you're looking for!
                    </p>
                </div>
                <div className="highlight">
                    <div className="highlight__img">
                        <FontAwesomeIcon icon="face-smile-beam" />
                    </div>
                    <h3 className='highlight__subtitle'>Fun to Use</h3>
                    <p className='highlight__para'>
                        Learn everything you want to know about your favorite films!
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
