import React, { useEffect } from 'react'

import CardItem from 'src/components/CardItem'
import useGetCharactersPaginated from 'src/hooks/useGetCharacters'

const Home = (): React.JSX.Element => {
  const { characters, getCharacters } = useGetCharactersPaginated()

  useEffect(() => {
    void getCharacters()
  }, [])

  return (
    <div className="home">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {characters && characters.map((character) => <CardItem key={character.id} />)}
        </div>
      </div>
    </div>
  )
}

export default Home
