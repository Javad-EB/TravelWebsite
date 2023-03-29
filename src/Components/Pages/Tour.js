import React from 'react'
import '../../App.css'
import Button from '../UI/Button'
import Cards from '../Tour/Cards'

function Tour() {
    return (
        <>
            <div className='tourism'>
                <section className='tourism-box'>
                    <input className='search-input' type="text" placeholder='Name of Country or City' autoComplete={false} />
                    <Button btnStyle='btn--search--place' btnSize='btn--large'>Search</Button>
                </section>
            </div>
            <Cards />
        </>
    )
}

export default Tour