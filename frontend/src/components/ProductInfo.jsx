import React from "react"
import Layout from "../mdb/Layout"
import { useParams } from "react-router-dom"
function ProductInfo() {
  const { id } = useParams()
  const productInfo = `Product Information for Product ID ${id}`
  return (
    <Layout>
      {/* Heading */}
      <div className='bg-primary'>
        <div className='container py-4'>
          {/* Breadcrumb */}
          <nav className='d-flex'>
            <h6 className='mb-0'>
              <a href='' className='text-white-50'>
                Home
              </a>
              <span className='text-white-50 mx-2'> {">"} </span>
              <a href='' className='text-white-50'>
                Library
              </a>
              <span className='text-white-50 mx-2'> {`>`} </span>
              <a href='' className='text-white'>
                <u>Data</u>
              </a>
            </h6>
          </nav>
          {/* Breadcrumb */}
        </div>
      </div>{" "}
      {/* Heading */}
      {/* content */}
      <section className='py-5'>
        <div className='container'>
          <div className='row gx-5'>
            <aside className='col-lg-6'>
              <div className='border rounded-4 mb-3 d-flex justify-content-center'>
                <a
                  data-fslightbox='mygalley'
                  className='rounded-4'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                >
                  <img
                    style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}
                    className='rounded-4 fit'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                  />
                </a>
              </div>
              <div className='d-flex justify-content-center mb-3'>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big2.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big3.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big4.webp'
                  />
                </a>
                <a
                  data-fslightbox='mygalley'
                  className='border mx-1 rounded-2 item-thumb'
                  target='_blank'
                  data-type='image'
                  href='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                >
                  <img
                    width='60'
                    height='60'
                    className='rounded-2'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp'
                  />
                </a>
              </div>
              {/* thumbs-wrap.// */}
              {/* gallery-wrap .end// */}
            </aside>
            <main className='col-lg-6'>
              <div className='ps-lg-3'>
                <h4 className='title text-dark'>
                  Quality Men's Hoodie for Winter, Men's Fashion <br />
                  Casual Hooded Sweatshirt Warm Thick Jacket
                </h4>
                <div className='price mt-3'>
                  <div className='d-flex'>
                    <ins>
                      <h3 className='text-success'> $299.00</h3>
                    </ins>
                    <del className='price-old ms-2'>$399.00</del>
                  </div>
                </div>
                {/* price-detail-wrap .// */}
                <p className='mt-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi error
                  omnis quaerat, corporis architecto fugit aut consequuntur tempore
                  voluptatibus?
                </p>
                <dl className='row mt-5'>
                  <dt className='col-sm-3'>Model#</dt>
                  <dd className='col-sm-9'>23506721</dd>
                  <dt className='col-sm-3'>Color</dt>
                  <dd className='col-sm-9'>Black and White</dd>
                  <dt className='col-sm-3'>Delivery</dt>
                  <dd className='col-sm-9'>Russia, USA, and Europe</dd>
                  <dt className='col-sm-3'>Shipping</dt>
                  <dd className='col-sm-9'>Free Shipping</dd>
                  <dt className='col-sm-3'>Condition</dt>
                  <dd className='col-sm-9'>New with box</dd>
                </dl>
                <div className='rating-wrap mt-3'>
                  <ul className='rating-stars list-unstyled'>
                    <li style={{ width: "80%" }} className='stars-active'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </li>
                    <li>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                    </li>
                  </ul>
                  <div className='label-rating'>132 reviews</div>
                  <div className='label-rating'>154 orders </div>
                </div>
                {/* rating-wrap.// */}
                <hr />
                <div className='row'>
                  <div className='col-md-5'>
                    <dl className='dlist-inline'>
                      <dt>Quantity: </dt>
                      <dd>
                        <select
                          className='form-select form-select-sm'
                          style={{ width: "70px" }}
                        >
                          <option value='1' selected>
                            1
                          </option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                        </select>
                      </dd>
                    </dl>
                  </div>
                  {/* item-property .// */}
                  <div className='col-md-7'>
                    <dl className='dlist-inline'>
                      <dt>Size: </dt>
                      <dd>
                        <label className='form-check form-check-inline'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='inlineRadioOptions'
                            id='inlineRadio2'
                            value='option2'
                          />
                          <span className='form-check-label'>SM</span>
                        </label>
                        <label className='form-check form-check-inline'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='inlineRadioOptions'
                            id='inlineRadio2'
                            value='option2'
                          />
                          <span className='form-check-label'>MD</span>
                        </label>
                        <label className='form-check form-check-inline'>
                          <input
                            className='form-check-input'
                            type='radio'
                            name='inlineRadioOptions'
                            id='inlineRadio2'
                            value='option2'
                          />
                          <span className='form-check-label'>XXL</span>
                        </label>
                      </dd>
                    </dl>
                  </div>
                  {/* item-property .// */}
                </div>
                {/* row.// */}
                <hr />
                <a href='#' className='btn btn-lg btn-primary text-uppercase'>
                  {" "}
                  Buy now{" "}
                </a>
                <a href='#' className='btn btn-lg btn-outline-primary text-uppercase'>
                  {" "}
                  <i className='fas fa-shopping-cart'></i> Add to cart{" "}
                </a>
              </div>
              {/* prod info */}
            </main>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProductInfo
