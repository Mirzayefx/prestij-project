import React from 'react'
import DOMPurify from 'dompurify'

const ServicesCard = ({data}) => {

  
  return (
    <div class="card">

      <article>
        <h2>{data.title}</h2>

        <div class="pic">
          <img src={data.image} />
        </div>

        <div class="desc">{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '')}</div>
      </article>

    </div>
  )
}

export default ServicesCard