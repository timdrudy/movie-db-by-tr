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
                <Highlight 
                    icon={<FontAwesomeIcon icon="dollar-sign" />} 
                    title="Free to Use"
                    para="Explore our free database of titles"
                />
                <Highlight 
                    icon={<FontAwesomeIcon icon="pizza-slice" />} 
                    title="Easy to Use"
                    para="With a few quick clicks, find the info you're looking for!"
                />
                <Highlight 
                    icon={<FontAwesomeIcon icon="face-smile-beam" />} 
                    title="Fun to Use"
                    para="Learn everything you want to know about your favorite films!"
                />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
