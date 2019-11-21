import React, { Suspense } from 'react'
import ModalVideo from 'react-modal-video'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import * as LazyComponent from '../../utils/LazyLoaded';
import Loader from '../loader/Loader';

const VideoModal = ({ channel, isOpen, videoId, action }) => {
  return (
    <React.Fragment>
      <ModalVideo
        channel={channel}
        isOpen={isOpen}
        videoId={videoId}
        onClose={action}
      />
      <Suspense fallback={<Loader />}>
        <LazyComponent.Button
          text='Trailer'
          icon={faPlay}
          className="btn-outline-primary"
          order='1'
          size='lg'
          dir='l'
          action={action}
        />
      </Suspense>
    </React.Fragment>
  )
}

export default VideoModal;