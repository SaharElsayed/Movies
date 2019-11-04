import React from 'react'
import ModalVideo from 'react-modal-video'
import Button from '../../components/button/Button';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoModal = ({ channel, isOpen, videoId, action }) => {

  return (
    <React.Fragment>
      <ModalVideo
        channel={channel}
        isOpen={isOpen}
        videoId={videoId}
        onClose={action}
      />
      <Button
        text='Trailer'
        icon={faPlay}
        className="btn-outline-primary"
        order='1'
        size='lg'
        dir='l'
        action={action}
      />
    </React.Fragment>
  )
}

export default VideoModal;