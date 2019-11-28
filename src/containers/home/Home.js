import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import Loader from './../../components/loader/Loader';
import * as LazyComponent from './../../utils/LazyLoaded';

class Home extends React.Component {
  render() {
    const { activeTab: { title } } = this.props;
    return (
      <React.Fragment>
        <Suspense fallback={<Loader />}>
          <LazyComponent.TabTitle title={`${title} Movies`} />
          <LazyComponent.MoviesList />
        </Suspense>
      </React.Fragment>
    );
  }
}



const mapStateToprops = state => ({
  activeTab: state.activeTab
})

export default connect(mapStateToprops)(Home);