import { ProductData } from "../Data/ProductData"
import CardProduct from "./CardProduct"
function ProductList() {
  return (
    <section>
      <div className='container my-5'>
        <header className='mb-4'>
          <h3>New products</h3>
        </header>

        <div className='row'>
          {ProductData.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
