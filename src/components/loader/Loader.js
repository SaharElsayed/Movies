import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loader.scss';

const Loader = ({imgSize}) => {
  return (
    <div className={`d-flex justify-content-center align-items-center ${imgSize ? 'imgLoader' : 'loader-wrapper'} `}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>

  )
}

export default Loader;