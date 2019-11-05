import React from 'react';
import { connect } from 'react-redux';
import { fetchArtistDetailsRequest } from '../../redux/actions/index';

const ArtistCard = React.lazy(() => import('./../../components/artistCard/ArtistCard'));

class ArtistDetails extends React.Component {
	componentDidMount() {
		const { id } = this.props.computedMatch.params;
		this.props.fetchArtistDetailsRequest(id);
	}
	render() {
		const { artist } = this.props;
		console.log(artist);
		
		return (
			<ArtistCard artist={artist} />
			)
	}
}

const mapStateToProps = state => {
	return { ...state }
}
export default connect(mapStateToProps, { fetchArtistDetailsRequest })(ArtistDetails);