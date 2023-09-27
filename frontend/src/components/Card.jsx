import ReactStars from "react-stars"

function Card({ title, image, price, rating, description, link }) {
  return (
    <div>
      <div className='max-w-2xl mx-auto'>
        <div className='shadow-md bg-slate-300 rounded-lg max-w-sm'>
          <img className='rounded-t-lg p-8 max-h-64 mx-auto' src={image} alt={description} />
          <div className='px-5 pb-5'>
            <a href={link}>
              <h3 className='text-gray-900 font-semibold text-xl tracking-tight '>{title}</h3>
            </a>
            <div className='flex items-center mt-2.5 mb-5'>
              <ReactStars count={5} value={rating} size={30} color2={"#ffd700"} edit={false} />
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded   ml-3'>
                {rating ? rating : 0}
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-3xl font-bold text-gray-900 mr-4'>$ {price}</span>
              <div>
                <a
                  href='#'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-4'
                >
                  Add to cart
                </a>
                <a
                  href='#'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
