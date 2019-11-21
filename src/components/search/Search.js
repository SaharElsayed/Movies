import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Form, InputGroup } from 'react-bootstrap';
import history from '../../app/history';
import './Search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const keyword = this.searchInput.value;
    this.searchInput.value = '';
    history.push(`/search/${keyword}`);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group>
            <div className="search-form">
              <InputGroup className="search-form__group">
                <InputGroup.Prepend >
                  <InputGroup.Text className='search-form__icon' id="inputGroupPrepend">
                    <FontAwesomeIcon icon={faSearch} size={this.props.size} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="search-form__input"
                  type="text"
                  placeholder="Search for a movie..."
                  aria-describedby="inputGroupPrepend"
                  ref={(e) => this.searchInput = e}
                  name="search"
                  autoComplete='off'
                />
              </InputGroup>
            </div>
          </Form.Group>
        </Form.Row>
      </Form>
    )
  }
}

export default Search;