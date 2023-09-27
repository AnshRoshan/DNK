// SearchBar.jsx
import React, { useState } from "react"

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value)
  }

  // You can add more filter options as needed

  return (
    <div className='p-4 flex'>
      <div className='mb-4 w-4/5'>
        <input
          type='text'
          placeholder='Search...'
          value={searchQuery}
          onChange={handleSearchInputChange}
          className='p-2 border w-full border-gray-300 rounded-md'
        />
      </div>
      <div className='mb-4'>
        <select
          onChange={handleCategorySelect}
          value={selectedCategory}
          className='p-2 border border-gray-300 rounded-md'
        >
          <option value=''>All Categories</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='books'>Books</option>
          {/* Add more category options */}
        </select>
      </div>
      {/* Add more filter options here */}
    </div>
  )
}

export default SearchBar
