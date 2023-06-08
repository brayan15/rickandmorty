import React from 'react'
import ReactPaginate from 'react-paginate'

import Loader from 'src/components/Loader'
import Search from 'src/components/Search'
import CardItem from 'src/components/CardItem'
import useGetCharactersPaginated from 'src/hooks/useGetCharacters'

const Home = (): React.JSX.Element => {
  const { isLoading, characters, setPage } = useGetCharactersPaginated()

  const changePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1)
  }

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
            <div className="row row-cols-2 row-cols-xl-4 g-4">
              {!isLoading &&
                characters &&
                characters.map((character) => (
                  <CardItem character={character} key={character.id} />
                ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="Page navigation example" className="mt-4">
            <ReactPaginate
              pageCount={42}
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
