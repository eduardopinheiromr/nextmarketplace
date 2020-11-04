/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-use-before-define */
import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'

const novidades = [
  { name: 'Novidade 1', image_path: '' },
  { name: 'Novidade 2', image_path: '' },
  { name: 'Novidade 3', image_path: '' }
]

const NovidadesList = styled.div`
  padding: 50px;
  text-align: center;
  h2 {
    padding: 30px;
  }
`
export default function Novidades(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  }
  return (
    <NovidadesList>
      <h2>Novidades</h2>
      <Slider {...settings}>
        {props.data.map(product => {
          return (
            <div key={product._id}>
              <h3
                style={{
                  color: '#fff',
                  height: 150,
                  width: 300,
                  background: 'purple',
                  padding: '20px'
                }}
              >
                {product.name}
              </h3>
            </div>
          )
        })}
      </Slider>
    </NovidadesList>
  )
}
