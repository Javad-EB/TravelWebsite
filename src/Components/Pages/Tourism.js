import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import CardsGuid from '../Tourism/CardsGuid'
import Cards from '../Cards/Cards'

function Tourism() {
    return (
        <>
            <div className='tourism'>
                <h1>Comprehensive travel and tourism portal</h1>
                <p>Travel and tourism portal</p>
                <section className='tourism-box'>
                    <input className='search-input' type="text" placeholder='Searching Country, City and ...' autoComplete={false} />
                    <Button btnStyle='btn--search--place' btnSize='btn--large'>Search</Button>
                </section>
            </div>
            <CardsGuid />
            <Cards />
        </>
    )
}

export default Tourism