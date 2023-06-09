import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Loader from 'src/components/Loader'
import { addRecentlyViewed } from 'src/store/App/reducer'
import useGetLocationById from 'src/hooks/useGetLocationById'
import useGetCharacterById from 'src/hooks/useGetCharacterById'

const CharacterDetail: FunctionComponent = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, character, getCharacterById } = useGetCharacterById()
  const { location, getLocationById } = useGetLocationById()
  const { location: origin, getLocationById: getOriginById } = useGetLocationById()

  useEffect(() => {
    if (id) void getCharacterById(id)
  }, [id])

  useEffect(() => {
    if (character) {
      const originId = character.origin.url.split('/').reverse()[0]
      const locationId = character.location.url.split('/').reverse()[0]

      if (originId) void getOriginById(originId)

      if (locationId) void getLocationById(locationId)

      dispatch(addRecentlyViewed(character))
    }
  }, [character])

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
                  <strong>Origin:</strong>{' '}
                  {origin ? `${origin.name}, ${origin.type}, ${origin.dimension}` : 'Unknown'}
                </p>
                <p className="card-caption mb-0">
                  <strong>Location:</strong>{' '}
                  {location
                    ? `${location.name}, ${location.type}, ${location.dimension}`
                    : 'Unknown'}
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
