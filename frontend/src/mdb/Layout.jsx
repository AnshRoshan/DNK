import { Children } from "react"
export default function Header({ children }) {
  return (
    <>
      <header>
        <div className='p-3 text-center border-bottom'>
          <div className='container'>
            <div className='row gy-3'>
              <div className='col-lg-2 col-sm-4 col-4'>
                <a href='https://mdbootstrap.com/' target='_blank' className='float-start'>
                  <img src='/logo.png' className='h-8' />
                </a>
              </div>

              <div className='order-lg-last col-lg-5 col-sm-8 col-8'>
                <div className='d-flex float-end'>
                  <a
                    href='/login'
                    className='me-1 border rounded py-1 px-3 nav-link d-flex align-items-center'
                    target='_blank'
                  >
                    {" "}
                    <i className='fas fa-user-alt m-1 me-md-2'></i>
                    <p className='d-none d-md-block mb-0'>Sign in</p>{" "}
                  </a>
                  <a
                    href='/Wishlist'
                    className='me-1 border rounded py-1 px-3 nav-link d-flex align-items-center'
                    target='_blank'
                  >
                    {" "}
                    <i className='fas fa-heart m-1 me-md-2'></i>
                    <p className='d-none d-md-block mb-0'>Wishlist</p>{" "}
                  </a>
                  <a
                    href='/cart'
                    className='border rounded py-1 px-3 nav-link d-flex align-items-center'
                    target='_blank'
                  >
                    {" "}
                    <i className='fas fa-shopping-cart m-1 me-md-2'></i>
                    <p className='d-none d-md-block mb-0'>My cart</p>{" "}
                  </a>
                </div>
              </div>

              <div className='col-lg-5 col-md-12 col-12'>
                <div className='input-group float-center'>
                  <div className='form-outline'>
                    <input type='search' id='form1' className='form-control' />
                    <label className='form-label' htmlFor='form1'>
                      Search
                    </label>
                  </div>
                  <button type='button' className='btn btn-primary shadow-0'>
                    <i className='fas fa-search'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className='navbar navbar-expand-lg navbar-light bg-white'>
          <div className='container justify-content-center justify-content-md-between'>
            <button
              className='navbar-toggler border py-2 text-dark'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#navbarLeftAlignExample'
              aria-controls='navbarLeftAlignExample'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i className='fas fa-bars'></i>
            </button>

            <div className='collapse navbar-collapse' id='navbarLeftAlignExample'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link text-dark' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Categories
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Hot offers
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Gift boxes
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Projects
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Menu item
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link text-dark' href='#'>
                    Menu name
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle text-dark'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-mdb-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Others
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='bg-primary text-white py-5'>
          <div className='container py-5'>
            <h1>
              Best products & <br />
              brands in our store
            </h1>
            <p>Trendy Products, Factory Prices, Excellent Service</p>
            <button type='button' className='btn btn-outline-light'>
              Learn more
            </button>
            <button
              type='button'
              className='btn btn-outline-light  shadow-0 pt-2 ml-2 '
              // className='btn btn-light shadow-0 text-primary pt-2 '
            >
              <span className='pt-1'>Purchase now</span>
            </button>
          </div>
        </div>
      </header>
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
