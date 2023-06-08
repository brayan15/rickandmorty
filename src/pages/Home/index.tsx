import React from 'react'

import CardItem from 'src/components/CardItem'

const Home = (): React.JSX.Element => (
  <div className="home">
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  </div>
)

export default Home
