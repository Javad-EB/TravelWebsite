import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import Button from '../UI/Button'
const Info = [
    {
        text: 'All tours'
    },
    {
        text: 'All one -day tours'
    },
    {
        text: 'All three -day tours'
    },
    {
        text: 'All next months tours'
    },
    {
        text: 'All Christmas Tours'
    },
    {
        text: 'All summer tours'
    },
]
function Cards() {
    return (
        <>
            <section className='container'>
                <article className='tour__tabs'>
                    <div className='tour__wrapper'>
                        <ul className='nav-tabs'>
                            {
                                Info.map((item, index) =>
                                    <li key={index}>
                                        <Link to='/' className='anchor'>
                                            <h5>{item.text}</h5>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </article>
            </section>
            <section className='tour__tabs'>
                <article className='tab-content'>
                    <div className='tab-pane'>
                        <header className='tab-header'>
                            <div className='tab-text'>
                                Tour
                            </div>
                            <div className='tab-sort-filter tab-text'>
                                Sort by
                                <span className='selectTours'>
                                    <select className='tab-sort-input'>
                                        <option value="newest">Newest</option>
                                        <option value="cheapest">Cheapest</option>
                                        <option value="viewCount">Most View</option>
                                    </select>
                                </span>
                            </div>
                        </header>
                        <div className='tabs-content'>
                            <ul>
                                <li>
                                    <Link className='anchor'>
                                        <span>Kish Island 2 Day and 3 nights</span>
                                        <p>from 1600$</p>
                                        <p>from 1 April to 3 April</p>
                                        <p>Tour Company</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className='anchor'>
                                        <span>Kish Island 2 Day and 3 nights</span>
                                        <p>from 1600$</p>
                                        <p>from 1 April to 3 April</p>
                                        <p>Tour Company</p>
                                    </Link>
                                </li>
                            </ul>
                            <div className='more-tour-button'>
                                <Button btnStyle='btn--tour' btnSize='btn--large'>More Tours</Button>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </>

    )
}

export default Cards