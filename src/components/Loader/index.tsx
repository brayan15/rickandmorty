import React from 'react'

const Loader = (): React.JSX.Element => (
  <div className="d-flex justify-content-center mb-4">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

export default Loader
