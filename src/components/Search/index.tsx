import React from 'react'

const Search = (): React.JSX.Element => {
  return (
    <div className="search-character d-flex mb-3">
      <div className="form-floating w-100 me-4">
        <input
          type="text"
          id="floatingInput"
          className="form-control"
          placeholder="Search by Name"
        />
        <label htmlFor="floatingInput">Name of character</label>
      </div>
      <div className="form-floating">
        <button className="btn btn-lg btn-primary">Search</button>
      </div>
    </div>
  )
}

export default Search
