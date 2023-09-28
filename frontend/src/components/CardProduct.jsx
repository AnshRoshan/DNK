// Card.js
import React from "react"
import { Link } from "react-router-dom"
function Card({ product }) {
  return (
    <div className='col-lg-3 col-md-6 col-sm-6 d-flex '>
      <div className='card w-100 my-2 shadow-2-strong bg-slate-300'>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            className='card-img-top w-4/5 mx-auto rounded-sm mt-2 '
            style={{ aspectRatio: "1" }}
            alt={product.title}
          />
        </Link>
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{product.title}</h5>
          <p className='card-text'>{`$${product.price}`}</p>
          <div className='card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto'>
            <a href='#!' className='btn btn-primary shadow-0 me-1'>
              Add to cart
            </a>
            <a href='#!' className='btn btn-light border px-2 pt-2 icon-hover'>
              <i className='fas fa-heart fa-lg text-secondary px-1'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
