import React, { FunctionComponent, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'src/components/Loader'

import useGetCharacterById from 'src/hooks/useGetCharacterById'

const CharacterDetail: FunctionComponent = () => {
  const { id } = useParams()
  const { isLoading, character, getCharacterById } = useGetCharacterById()

  useEffect(() => {
    if (id) void getCharacterById(id)
  }, [id])

  return (
    <div>
      {isLoading && <Loader />}

      {character && (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={character.image} className="img-fluid rounded" alt={character.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-3">{character.name}</h5>
                <p className="card-caption mb-0">
                  <strong>Status:</strong> {character.status}
                </p>
                <p className="card-caption mb-0">
                  <strong>Specie:</strong> {character.species}
                </p>
                <p className="card-caption mb-0">
                  <strong>Gender:</strong> {character.gender}
                </p>
                <p className="card-caption mb-0">
                  <strong>Type:</strong> {character.type || 'Unknown'}
                </p>
                <p className="card-caption mb-0">
                  <strong>Origin:</strong> {character.origin.name}
                </p>
                <p className="card-caption mb-0">
                  <strong>Location:</strong> {character.location.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CharacterDetail
