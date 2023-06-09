import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setSearchTerm } from 'src/store/App/reducer'
import { searchTemrSelector } from 'src/store/App/selectors'

const Search: FunctionComponent = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector(searchTemrSelector)
  const [characterName, setcharacterName] = useState<string>('')

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setcharacterName(event.currentTarget.value)
  }

  const onSearch = () => {
    dispatch(setSearchTerm(characterName))
  }

  useEffect(() => {
    if (searchTerm) setcharacterName(searchTerm)
  }, [])

  return (
    <div className="search-character d-flex mb-3">
      <div className="form-floating w-100 me-4">
        <input
          type="text"
          id="floatingInput"
          value={characterName}
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
