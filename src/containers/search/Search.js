import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import Loader from './../../components/loader/Loader';

class Search extends React.Component {
  componentDidMount() {
    const { keyword } = this.props.computedMatch.params;
    this.fetchList(keyword);
  }

  componentDidUpdate(prevProps) {
    const { computedMatch: { params: { keyword: nextKeyword } } } = this.props;
    const { computedMatch: { params: { keyword } } } = prevProps;
    if (nextKeyword !== keyword) {
      this.fetchList(nextKeyword)
    }
  }

  fetchList = searchKey => {
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
        <Suspense fallback={<Loader />}>
          <LazyComponent.TabTitle title={`${search} - Search results`} />
          <LazyComponent.MoviesList
            pageTitle={(search.length === 0) ? title : (results && results.length > 0) ? search : ' '}
            subTitle={(search.length === 0) ? 'MOVIES' : ((search.length > 0) && (results && results.length > 0)) ? 'SEARCH RESULTS' : ' '}
          />
        </Suspense>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  setSearchKeyword: actions.setSearchKeyword,
  fetchMoviesRequest: actions.fetchMoviesRequest
};

const mapStateToProps = state => {
  return { ...state }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);