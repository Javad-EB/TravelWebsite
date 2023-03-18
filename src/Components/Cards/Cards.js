import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className='cards'>
            <h1>Famous Places</h1>
            <section className='cards__container'>
                <article className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            path='/'
                            label='unknown'
                            src='images/9.jpg'
                            text='Amazon Forest'
                        />
                        <CardItem
                            path='/'
                            label='unknown'
                            src='images/8.jpg'
                            text='Desert in IRAN'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            path='/'
                            label='Luxury'
                            src='images/2.jpg'
                            text='Caribbean island'
                        />
                        <CardItem
                            path='/'
                            label='Luxury'
                            src='images/1.jpg'
                            text='Alps mountains'
                        />
                        <CardItem
                            path='/'
                            label='unknown'
                            src='images/6.jpg'
                            text='Visit a city'
                        />
                    </ul>
                </article>
            </section>
        </div>
    )
}

export default Cards