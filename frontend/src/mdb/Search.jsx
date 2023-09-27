import React from 'react'

function Search() {
  return (
    <div class="input-group">
  <div class="form-outline">
    <input id="search-focus" type="search" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" className="btn btn-primary focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none">
  <i className="fas fa-search"></i>
</button>

  
</div>
  )
}

export default Search