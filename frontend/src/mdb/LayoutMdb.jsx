import { Children } from "react"
import Header from "../components/Layout/Header"
export default function LayoutMdb({ children }) {
  return (
    <>
      <Header />
      {/* -------------------------------------------------------------------------------------------- */}
      {children}
      <hr className='bg-slate-800' />
      <footer className='text-center text-lg-start text-muted mt-3 bg-slate-200'>
        <section className=''>
          <div className='container text-center text-md-start pt-4 pb-4'>
            <div className='row mt-3'>
              <div className='col-12 col-lg-3 col-sm-12 mb-2'>
                <a href='https://mdbootstrap.com/' target='_blank' className=''>
                  <img src='/logo.png' className='h-32' />
                </a>
                <p className='mt-2 text-dark'>© 2023 Copyright:Code Innovator </p>
              </div>

              <div className='col-6 col-sm-4 col-lg-2'>
                <h6 className='text-uppercase text-dark fw-bold mb-2'>Store</h6>
                <ul className='list-unstyled mb-4'>
                  <li>
                    <a className='text-muted' href='#'>
                      About us
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Find store
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-6 col-sm-4 col-lg-2'>
                <h6 className='text-uppercase text-dark fw-bold mb-2'>Information</h6>
                <ul className='list-unstyled mb-4'>
                  <li>
                    <a className='text-muted' href='#'>
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Money refund
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Shipping info
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Refunds
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-6 col-sm-4 col-lg-2'>
                <h6 className='text-uppercase text-dark fw-bold mb-2'>Support</h6>
                <ul className='list-unstyled mb-4'>
                  <li>
                    <a className='text-muted' href='#'>
                      Help center
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      Account restore
                    </a>
                  </li>
                  <li>
                    <a className='text-muted' href='#'>
                      My orders
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-12 col-sm-12 col-lg-3'>
                <h6 className='text-uppercase text-dark fw-bold mb-2'>Newsletter</h6>
                <p className='text-muted'>
                  Stay in touch with latest updates about our products and offers
                </p>
                <div className='input-group mb-3'>
                  <input
                    type='email'
                    className='form-control border'
                    placeholder='Email'
                    aria-label='Email'
                    aria-describedby='button-addon2'
                  />
                  <button
                    className='btn btn-light border shadow-0'
                    type='button'
                    id='button-addon2'
                    data-mdb-ripple-color='dark'
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=''>
          <div className='container'>
            <div className='d-flex justify-content-between py-4 border-top'>
              <div>
                <i className='fab fa-lg fa-cc-visa text-dark'></i>
                <i className='fab fa-lg fa-cc-amex text-dark'></i>
                <i className='fab fa-lg fa-cc-mastercard text-dark'></i>
                <i className='fab fa-lg fa-cc-paypal text-dark'></i>
              </div>

              <div className='dropdown dropup'>
                <a
                  className='dropdown-toggle text-dark'
                  href='#'
                  id='Dropdown'
                  role='button'
                  data-mdb-toggle='dropdown'
                  aria-expanded='false'
                >
                  {" "}
                  <i className='flag-united-kingdom flag m-0 me-1'></i>English{" "}
                </a>

                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='Dropdown'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-united-kingdom flag'></i>English{" "}
                      <i className='fa fa-check text-success ms-2'></i>
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-poland flag'></i>Polski
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-china flag'></i>中文
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-japan flag'></i>日本語
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-germany flag'></i>Deutsch
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-france flag'></i>Français
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-spain flag'></i>Español
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-russia flag'></i>Русский
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      <i className='flag-portugal flag'></i>Português
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
