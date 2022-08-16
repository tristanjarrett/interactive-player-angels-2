import React from 'react';
import videojs from 'video.js';

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      //console.log('onPlayerReady', this)
    });
  }
  
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }
  
  render() {
    return (
      <div className="responsive-video main-video">
        <div data-vjs-player>
          <video ref={node => this.videoNode = node} className="video-js vjs-default-skin vjs-big-play-centered"  playsInline={true}></video>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;