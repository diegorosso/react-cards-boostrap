import React from 'react'
import Card from'../components/Card'

import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.webp'
import image3 from '../assets/image3.webp'

const cards = [
    {
        id: 1,
        title: 'Web',
        image: image1,
        url:'http://google.com'
    },
    {
        id: 2,
        title: 'Blog',
        image: image2,
        url:'http://tumblr.com'

    },
    {
        id: 3,
        title: 'Youtube',
        image: image3,
        url:'http://youtube.com'
    }

]

function Cards() {
    
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                    <Card title={card.title} imageSource={card.image} url={card.url}/>
                </div>      
                ))
            }
        </div>
          
    </div>
  )
}

export default Cards