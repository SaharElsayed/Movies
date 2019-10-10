import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form, InputGroup } from 'react-bootstrap';

import './Search.scss';

const Search = ({ size }) => {
  return (
    <Form.Group controlId="validationCustomUsername">
      <div className="search-form">
        <InputGroup className="search-form__group">

          <InputGroup.Prepend >

            <InputGroup.Text className='search-form__icon' id="inputGroupPrepend">
              <FontAwesomeIcon icon={faSearch} size={size} />
            </InputGroup.Text>

          </InputGroup.Prepend>

          <Form.Control
            className="search-form__input"
            type="text"
            placeholder="Search for a movie..."
            aria-describedby="inputGroupPrepend"
          />

        </InputGroup>
      </div>

    </Form.Group>

  )
}

export default Search;