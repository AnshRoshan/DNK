import React from "react"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card"
import { Product } from "../Data/Product"
const HomePage = () => {
  return (
    <Layout>
      <div className='flex flex-wrap gap-4 h-fit min-h-screen  bg-slate-700 p-12 '>
        {Product.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            image={product.image}
            price={product.price}
            rating={product.rating}
            description={product.description}
            link={product.link}
          />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
