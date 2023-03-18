import React from 'react'
import './MainSection.css'
import Button from '../UI/Button'

function MainSection() {
    return (
        <div className='main-container'>
            <video src='/videos/4.mp4' autoPlay loop='true' muted />
            <section className='main-section'>
                <input type="text" name="search-box" id="search-box"
                    placeholder='Search Place, City, Country and ...' autoComplete={false}
                    className='search-input' />
                <Button btbStyle='btn--search'>
                    Search
                </Button>
            </section>
        </div>
    )
}


export default MainSection