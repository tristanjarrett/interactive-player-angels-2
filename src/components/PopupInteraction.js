import React from 'react';


const PopupInteraction = (props) => {

  const hidePlayIcon = (props, value) => {

    return props.indexOf(value) > -1;

  }

  return (
    <div className="video-interaction-content">
      <div className={`video-interaction-content-box green ${props.color}`}>
        <div className="left">
          <div className="left-center"><img src={props.icon} alt={props.title} /></div>
        </div>
        <div className="center">
          <div className="center-content">
            <div className="center-content-left">{props.contentLeft}</div>
            <div className="center-content-center">
              <h2 className="title">{props.contentCenterTitle}</h2>
              <p>{props.contentCenterDescription}</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button className={`watch-again-icon ${!hidePlayIcon(props.watchedVideo, props.hideShowPopupVideo) ? "d-none" : ""}`} onClick={() => props.showPopupVideo(props.video, props.hideShowPopupVideo)}><img src={props.watchAgainIcon} alt="Watch Again" /></button>
          <button className={`play-icon ${hidePlayIcon(props.watchedVideo, props.hideShowPopupVideo) ? "d-none" : ""}`} onClick={() => props.showPopupVideo(props.video, props.hideShowPopupVideo)}><img src={props.playIcon} alt="Play Video" /></button>
        </div>
      </div>
    </div>
  );
}

export default PopupInteraction;