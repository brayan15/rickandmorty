import React, { FunctionComponent, useState } from 'react'

type SearchT = {
  onClick: (name: string) => void
}

const Search: FunctionComponent<SearchT> = ({ onClick }) => {
  const [name, setName] = useState<string>('')

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const onSearch = () => {
    onClick(name)
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
