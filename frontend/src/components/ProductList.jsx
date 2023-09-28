// import { ProductData } from "../Data/ProductData"
import { Product } from "../Data/Product"
import CardProduct from "./CardProduct"
function ProductList() {
  return (
    <section>
      <div className='container my-5'>
        <header className='mb-4'>
          <h3>New products</h3>
        </header>

        <div className='row'>
          {Product.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
