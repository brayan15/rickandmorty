import React, { FunctionComponent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSearchTerm } from 'src/store/App/reducer'

const Search: FunctionComponent = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState<string>('')

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const onSearch = () => {
    dispatch(setSearchTerm(name))
  }

  return (
    <div className="search-character d-flex mb-3">
      <div className="form-floating w-100 me-4">
        <input
          value={name}
          type="text"
          id="floatingInput"
          className="form-control"
          onChange={onInputChange}
          placeholder="Search by Name"
        />
        <label htmlFor="floatingInput">Name of character</label>
      </div>
      <div className="form-floating">
        <button className="btn btn-lg btn-primary" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
