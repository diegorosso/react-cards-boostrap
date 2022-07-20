import React from 'react'
import PropTypes from 'prop-types'

import './cards.css';

function Card({title, imageSource, text, url}) {
  
  return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
        <img src = {imageSource} alt="" className='card-img-top'/>
      </div>
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>  
        <p className='card-text text-secondary'>
          {
            text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat augue tellus, sit amet cursus massa suscipit et. Integer elit arcu, dictum quis commodo et, lacinia eu tellus. Praesent sodales consequat maximus. Sed quis magna bibendum, hendrerit diam non, dapibus elit. Morbi id nulla quis enim ultrices convallis. Praesent id tortor magna.'
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target="_blank">
          Go to this website 
        </a>
      </div>  
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}
export default Card
