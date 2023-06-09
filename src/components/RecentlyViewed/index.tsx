import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { recentlyViewedSelector } from 'src/store/App/selectors'
import CardItem from '../CardItem'

const RecentlyViewed: FunctionComponent = () => {
  const recentlyViewed = useSelector(recentlyViewedSelector)

  return (
    <div className="recently p-4 rounded">
      <h3 className="mb-4">Recently viewed</h3>
      <div className="row">
        {recentlyViewed &&
          recentlyViewed.map((character) => (
            <div key={character.id} className="col-12 col-xl-6 mb-4">
              <CardItem character={character} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default RecentlyViewed
