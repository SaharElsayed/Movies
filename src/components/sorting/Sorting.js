import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { setSorting, fetchMoviesRequest } from '../../redux/actions/index';
import './Sorting.scss';

const options = [
  { value: 'popularity.desc', label: 'Popularity' },
  { value: 'vote_average.desc', label: 'Votes Average' },
  { value: 'original_title.asc', label: 'Title' },
  { value: 'release_date.desc', label: 'Release Date' }
];

class Sorting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: options[0]
    };
  }

  handleChange = selectedOption => {
    const { fetchMoviesRequest, setSorting, activeTab: { key, id }, searchKeyword: { search }, artist: { id: artistID } } = this.props;
    this.setState({ selectedOption });
    setSorting({ sortingKey: selectedOption.value });
    fetchMoviesRequest(key, {
      page: 1,
      with_genres: (key && artistID) ? '' : id,
      query: search ? search : '',
      sort_by: selectedOption.value,
      with_cast: artistID ? artistID : ''
    });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(84, 110, 122, 0.5)',
            primary: '#37474f',
          },
        })}
      />
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
}

export default connect(mapStateToProps, { setSorting, fetchMoviesRequest })(Sorting);