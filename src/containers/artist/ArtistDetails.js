import React, { Suspense }  from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/index';
import * as LazyComponent from './../../utils/LazyLoaded';
import Loader from './../../components/loader/Loader';

class ArtistDetails extends React.Component {
	componentDidMount() {
		const { id } = this.props.computedMatch.params;
		this.fetchArtist(id);
	}

	componentDidUpdate(prevProps) {
		if (this.props.computedMatch.params.id !== prevProps.computedMatch.params.id) {
			this.fetchArtist(this.props.computedMatch.params.id)
		}
	}

	fetchArtist = (id) => {
		const { fetchArtistDetailsRequest, fetchMoviesRequest, activeTab: { key } } = this.props;
		fetchArtistDetailsRequest(id);
		fetchMoviesRequest(key, {
			page: 1,
			sort_by: 'popularity.desc',
			with_cast: id
		});
	}

	render() {
		const { artist } = this.props;
		return (
			<React.Fragment>
				<Suspense fallback={<Loader />}>
					<LazyComponent.TabTitle title={`${artist.name} - Movie Library`} />
					<LazyComponent.ArtistCard artist={artist} />
					<LazyComponent.MoviesList pageTitle="also enters in" artistKey />
				</Suspense>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = {
	fetchArtistDetailsRequest: actions.fetchArtistDetailsRequest,
	fetchMoviesRequest: actions.fetchMoviesRequest
};

const mapStateToProps = state => {
	return { ...state }
}
export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetails);