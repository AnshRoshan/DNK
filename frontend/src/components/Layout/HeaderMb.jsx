function HeaderMb() {
  return (
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
  )
}
export default HeaderMb
