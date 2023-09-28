import React from "react"
import Layout from "../components/Layout/Layout"
import Card from "../components/Card"
import { Product } from "../Data/Product"
import SearchBar from "../components/SearchBar"
import ImageSlider from "../components/ImageSlider"
const HomePage = () => {
  return (
    <Layout>
      <SearchBar></SearchBar>
      <div className='flex flex-wrap gap-4 h-fit p-12 '>
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
