import React from 'react';
import { connect } from 'react-redux';
import { fetchMoviesRequest, setSearchKeyword } from '../../redux/actions/index';
import TabTitle from './../../components/tabTitle/TabTitle';

const MoviesList = React.lazy(() => import('../moviesList/MoviesList'));

class Search extends React.Component {
  componentDidMount() {
    const { keyword } = this.props.computedMatch.params;
    this.fetchList(keyword);
  }

  componentDidUpdate(prevProps) {
    if (this.props.computedMatch.params.keyword !== prevProps.computedMatch.params.keyword) {
      this.fetchList(this.props.computedMatch.params.keyword)
    }
  }

  fetchList(searchKey) {
    const { fetchMoviesRequest, setSearchKeyword, activeTab: { key } } = this.props;
    setSearchKeyword({ search: searchKey });
    fetchMoviesRequest(key, {
      page: 1,
      query: searchKey
    });
  }
  render() {
    const { searchKeyword: { search }, activeTab: { title }, list: { results } } = this.props;
    return (
      <React.Fragment>
        {/* {(results && results.length) > 0 ? <TabTitle title={`${search} - Search results`} /> : <TabTitle title={`Movie Library`} /> } */}
        <TabTitle title={`${search} - Search results`} />
        <MoviesList
          pageTitle={(search.length === 0) ? title : (results && results.length > 0) ? search : ' '}
          subTitle={(search.length === 0) ? 'MOVIES' : ((search.length > 0) && (results && results.length > 0)) ? 'SEARCH RESULTS' : ' '}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps, { fetchMoviesRequest, setSearchKeyword })(Search);