import React from 'react'
import DOMPurify from 'dompurify'
import { Link } from 'react-router-dom'

const ServicesCard = ({ data }) => {


  return (
    <Link to={`/xidmetlerimiz/${data.title.replace(/\s/g,'')}/${data.id}`}>
      <div class="card">

        <article>
          <h2>{data.title}</h2>

          <div class="pic">
            <img src={data.image} />
          </div>

          <div class="desc">{DOMPurify.sanitize(data.content).replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ')}</div>
        </article>

      </div>
    </Link>

  )
}

export default ServicesCard