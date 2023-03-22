import React from 'react'
import './CardsGuid.css'
import CardItem from './CardItem'

function CardsGuid() {
    return (
        <section className='cards'>
            <h1>The best travel guide, buying plane tickets,
                guide for obtaining visa, booking hotel and accommodation, tourist places</h1>
            <p>Comprehensive travel and travel portal</p>
            <article className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/compare.png"
                            title="Information"
                            text="Introducing the attractions of the world"
                        />
                        <CardItem
                            src="/images/compare.png"
                            title="Advanced search"
                            text="Search all your travel destinationsd"
                        />
                        <CardItem
                            src="/images/compare.png"
                            title="Comprehensive travel and entertainment guide"
                            text="Travel guide to different countries around the world"
                        />
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default CardsGuid