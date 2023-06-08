import React from 'react'

const CardItem = (): React.JSX.Element => (
  <div className="col">
    <div className="card h-100">
      <img
        alt="Rick Sanchez"
        className="card-img-top"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      />
      <div className="card-body">
        <h5 className="card-title">Rick Sanchez</h5>
        <p className="cadr-caption mb-0">
          <strong>Status:</strong> Alive
        </p>
        <p className="cadr-caption mb-0">
          <strong>Spice:</strong> Human
        </p>
        <p className="cadr-caption mb-0">
          <strong>Gender:</strong> Male
        </p>
      </div>
    </div>
  </div>
)

export default CardItem
