import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistDetailsRequest } from '../../redux/actions/index';
import { fetchMoviesRequest } from '../../redux/actions/index';
import TabTitle from './../../components/tabTitle/TabTitle';

const ArtistCard = React.lazy(() => import('./../../components/artistCard/ArtistCard'));
const MovieList = React.lazy(() => import('../moviesList/MoviesList'));

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
				<TabTitle title={`${artist.name} - Movie Library`} />
				<ArtistCard artist={artist} />
				<MovieList pageTitle="also enters in" artistKey />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return { ...state }
}
export default connect(mapStateToProps, { fetchArtistDetailsRequest, fetchMoviesRequest })(ArtistDetails);