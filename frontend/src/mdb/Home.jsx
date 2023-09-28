import ProductList from "../components/ProductList"
import Layout from "./LayoutMdb"
export default function Home() {
  return (
    <Layout>
      <ProductList></ProductList>
      <section className='mt-5' style={{ backgroundColor: "#f5f5f5" }}>
        <div className='container text-dark pt-3'>
          <header className='pt-4 pb-3'>
            <h3>Why choose us</h3>
          </header>

          <div className='row mb-4'>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-camera-retro fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Reasonable prices</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-star fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Best quality</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-plane fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Worldwide shipping</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-users fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Customer satisfaction</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-thumbs-up fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Happy customers</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
            <div className='col-lg-4 col-md-6'>
              <figure className='d-flex align-items-center mb-4'>
                <span className='rounded-circle bg-white p-3 d-flex me-2 mb-2'>
                  <i className='fas fa-box fa-2x fa-fw text-primary floating'></i>
                </span>
                <figcaption className='info'>
                  <h6 className='title'>Thousand items</h6>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-5 mb-4'>
        <div className='container text-dark'>
          <header className='mb-4'>
            <h3>Blog posts</h3>
          </header>

          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <article>
                <a href='#' className='img-fluid'>
                  <img
                    className='rounded w-100 object-cover'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp'
                    height='160'
                  />
                </a>
                <div className='mt-2 text-muted small d-block mb-1'>
                  <span>
                    <i className='fa fa-calendar-alt fa-sm'></i>
                    23.12.2022
                  </span>
                  <a href='#'>
                    <h6 className='text-dark'>How to promote brands</h6>
                  </a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <article>
                <a href='#' className='img-fluid'>
                  <img
                    className='rounded object-cover w-100 '
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp'
                    height='160'
                  />
                </a>
                <div className='mt-2 text-muted small d-block mb-1'>
                  <span>
                    <i className='fa fa-calendar-alt fa-sm'></i>
                    13.12.2022
                  </span>
                  <a href='#'>
                    <h6 className='text-dark'>How we handle shipping</h6>
                  </a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <article>
                <a href='#' className='img-fluid'>
                  <img
                    className='rounded w-100 object-cover'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp'
                    height='160'
                  />
                </a>
                <div className='mt-2 text-muted small d-block mb-1'>
                  <span>
                    <i className='fa fa-calendar-alt fa-sm'></i>
                    25.11.2022
                  </span>
                  <a href='#'>
                    <h6 className='text-dark'>How to promote brands</h6>
                  </a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <article>
                <a href='#' className='img-fluid'>
                  <img
                    className='rounded w-100 object-cover'
                    src='https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp'
                    height='160'
                  />
                </a>
                <div className='mt-2 text-muted small d-block mb-1'>
                  <span>
                    <i className='fa fa-calendar-alt fa-sm'></i>
                    03.09.2022
                  </span>
                  <a href='#'>
                    <h6 className='text-dark'>Success story of sellers</h6>
                  </a>
                  <p>When you enter into any new area of science, you almost reach</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
