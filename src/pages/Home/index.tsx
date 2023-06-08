import React, { FunctionComponent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'

import Loader from 'src/components/Loader'
import Search from 'src/components/Search'
import CardItem from 'src/components/CardItem'
import { searchTemrSelector } from 'src/store/App/selectors'
import useGetCharactersPaginated from 'src/hooks/useGetCharacters'

const Home: FunctionComponent = () => {
  const name = useSelector(searchTemrSelector)
  const { isLoading, characters, pages, getCharacters } = useGetCharactersPaginated()

  const shouldShow = !isLoading && characters

  const changePage = ({ selected }: { selected: number }) => {
    void getCharacters(selected + 1, name)
  }

  useEffect(() => {
    void getCharacters(1, name)
  }, [name])

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 order-sm-1">
            <h3>Recently viewed</h3>
          </div>
          <div className="col-12 col-sm-8">
            <Search />
            {isLoading && <Loader />}
            {shouldShow && !characters.length && <p>There is nothing here</p>}
            <div className="row row-cols-2 row-cols-xl-4 g-4">
              {shouldShow &&
                characters.map((character) => (
                  <CardItem character={character} key={character.id} />
                ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example" className="mt-4">
            <ReactPaginate
              pageCount={pages}
              pageRangeDisplayed={5}
              activeClassName="active"
              onPageChange={changePage}
              pageClassName="page-item"
              nextClassName="page-item"
              breakClassName="page-item"
              previousClassName="page-item"
              pageLinkClassName="page-link"
              nextLinkClassName="page-link"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              previousLinkClassName="page-link"
            />
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Home
