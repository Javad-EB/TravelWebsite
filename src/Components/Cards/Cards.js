import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Famous Places</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/9.jpg"
                            label="Unknown"
                            text="Stunning waterfall in the Amazon jungle"
                            path="/dervices"
                        />
                        <CardItem
                            path="/dervices"
                            label="Unknown"
                            src="images/8.jpg"
                            text="A beautiful desert with a caravan of amazing camels in IRAN"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            path="/dervices"
                            label="Luxury"
                            src='images/2.jpg'
                            text='Indescribable beaches of the Caribbean islands'
                        />
                        <CardItem
                            path="/dervices"
                            label="Luxury"
                            src="images/1.jpg"
                            text="A view of the sunset in the Alps"
                        />
                        <CardItem
                            path="/dervices"
                            label="Unknown"
                            src="images/6.jpg"
                            text="A different experience from traveling in tourist countries"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards