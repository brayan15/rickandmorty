import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import { CharacterT } from 'src/types'

const CardItem: FunctionComponent<{ character: CharacterT }> = ({ character }) => (
  <div className="col">
    <Link to={`/character/${character.id}`} className="text-decoration-none">
      <div className="card h-100">
        <img alt={character.name} className="card-img-top" src={character.image} />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="cadr-caption mb-0">
            <strong>Status:</strong> {character.status}
          </p>
          <p className="cadr-caption mb-0">
            <strong>Specie:</strong> {character.species}
          </p>
          <p className="cadr-caption mb-0">
            <strong>Gender:</strong> {character.gender}
          </p>
        </div>
      </div>
    </Link>
  </div>
)

export default CardItem
