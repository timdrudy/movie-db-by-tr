import React from 'react'
import MovieLanding from "../assets/MovieLanding.svg"

const Landing = () => {
  return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>The Only Movie Database You Will Ever Need</h1>
                    <h2>The Most Updated <span className='purple'>Movie Database</span> in Existence</h2>
                    <a href="#features">
                        <button className='btn'>Browse Movies</button>
                    </a>
                </div>
                <figure className='header__img--wrapper'>
                    <img src={MovieLanding} alt="" />
                </figure>
            </div>
        </header>
      
    </section>
  )
}

export default Landing
