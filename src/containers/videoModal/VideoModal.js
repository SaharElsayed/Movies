import React from 'react'
import ModalVideo from 'react-modal-video'
import Button from '../../components/button/Button';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

class VideoModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <Button
          text='Trailer'
          icon={faPlay}
          className="btn-outline-primary"
          order='1'
          size='lg'
          dir='l'
          action={this.openModal}
        />
      </div>
    )
  }
}

export default VideoModal;