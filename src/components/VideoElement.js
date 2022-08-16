import React, { useState,  useLayoutEffect } from 'react';
import VideoPlayer from './Video';
import MenuIcon from '../assets/images/menu.svg';
import CloseIcon from '../assets/images/close.svg';
import CloseIcon2 from '../assets/images/close2.svg';
import PlayIcon from '../assets/images/play.svg';
import WatchAgainIcon from '../assets/images/watch-again.svg';
import MildIcon from '../assets/images/mild.svg';
import ModerateIcon from '../assets/images/moderate.svg';
import SevereIcon from '../assets/images/severe.svg';
import DeadIcon from '../assets/images/dead.svg';
import SkipVideoButton from '../assets/images/skip-video.svg';
import ReferencesGreenIcon from '../assets/images/references_green.svg';
import RotateGif from '../assets/images/rotate_device.gif';

// content
import videos from '../assets/videos/video-data-en.json';

// temp
import ChaptersList from './ChaptersList';
import PopupInteraction from './PopupInteraction';
import TabInteraction from './TabInteraction';
import CardInteraction from './CardInteraction';

// assets
import interaction8a from '../assets/files/AHA ASA 2018 Guidelines.pdf';
import interaction8aImage from '../assets/images/Interaction8a.png';
import interaction8bImage from '../assets/images/Interaction8b.png';
import referencesDocument from '../assets/files/references.htm'

const VideoElement = () => {

  let video;
  let tick;
  let browserDelay;
  let videoProgress = videos[0].chapters;
  const startBackground = `./welcome/${videos[0].start_screen}`;
  const interaction2Orange = `./thumbnails/${videos[0].country_code}/${videos[0].int_2_orange}`;
  const interaction2Blue = `./thumbnails/${videos[0].country_code}/${videos[0].int_2_blue}`;
  const interaction2Purple = `./thumbnails/${videos[0].country_code}/${videos[0].int_2_purple}`;
  const interaction2Yellow = `./thumbnails/${videos[0].country_code}/${videos[0].int_2_yellow}`;
  const interaction1Image = `./interactives/${videos[0].country_code}/${videos[0].case_69}`;
  const interaction13aImage = `./interactives/${videos[0].country_code}/${videos[0].case_33}`;
  const interaction13bImage = `./interactives/${videos[0].country_code}/${videos[0].case_36}`;
  const interaction13cImage = `./interactives/${videos[0].country_code}/${videos[0].case_291}`;
  const interaction2OrangeFile = `./files/${videos[0].country_code}/${videos[0].orange_file}`;
  const interaction2BlueFile = `./files/${videos[0].country_code}/${videos[0].blue_file}`;
  const interaction2PurpleFile = `./files/${videos[0].country_code}/${videos[0].purple_file}`;
  const interaction2YellowFile = `./files/${videos[0].country_code}/${videos[0].yellow_file}`;
  const interaction9 = `./files/${videos[0].country_code}/${videos[0].interaction_9}`;


  const [currentSkip, setCurrentSkip] = useState(0);

  const [startVisible, setStartVisible] = useState(true);
  // const [activatedMenu, setActivatedMenu] = useState([]);

  const startVideo = () => {
    setStartVisible(false);
    nextChapter()
    //video.play();
  }

  useLayoutEffect(() => {

    browserDelay = 1; // safari seems to have updated..?

    video = document.querySelector('video');

    if (!startVisible) {

      let arrayChapters = [];
      let arraySections = [];

      const chapters = videos[0].chapters;

      for (let i = 0; i < chapters.length; i++) {

        const chapterTimes = chapters[i];
        let chapterTime = breakdownTime(chapterTimes.start);
        chapterTime = chapterTime * browserDelay; // 250ms workaround
        chapterTime = Math.round(chapterTime);
        let chapterTimeEnd = breakdownTime(chapterTimes.end);
        chapterTimeEnd = chapterTimeEnd * browserDelay; // 250ms workaround
        chapterTimeEnd = Math.round(chapterTimeEnd);
        arrayChapters.push(chapterTime, chapterTimeEnd);

        const sections = chapters[i].sections;

        for (let x = 0; x < sections.length; x++) {
          

          const times = sections[x];
          let time = breakdownTime(times.start);
          time = time * browserDelay; // 250ms workaround
          time = Math.round(time);
          time = time - 1; // setTimeout alteration
          let timeEnd = breakdownTime(times.end);
          timeEnd = timeEnd * browserDelay; // 250ms workaround
          timeEnd = Math.round(timeEnd);
          timeEnd = timeEnd - 1; // setTimeout alteration
          arraySections.push(time, timeEnd);

        }

      }
      
      video.addEventListener('timeupdate', function () {
        

        tick = (video.currentTime * browserDelay);
        tick++;
      
        
        tick = Math.floor(tick);
        // console.log(tick)

        // if(tick >= 11264){
        //   setSkipVideo(false)
        // }else{
        //   setSkipVideo(true)
        // }

        // if (tick >= 440 && tick <= 960) {
        //   setCurrentSkip(960 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 2188 && tick < 2488) {
        //   setCurrentSkip(2488 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 2692 && tick < 3140) {
        //   setCurrentSkip(3140 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 3480 && tick < 4028) {
        //   setCurrentSkip(4028 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 10588 && tick < 11136) {
        //   setCurrentSkip(11136 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 19976 && tick < 21348) {
        //   setCurrentSkip(21348 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 21520 && tick < 22680) {
        //   setCurrentSkip(22680 / browserDelay);
        //   setSkipVideo(true);
        // } else if (tick >= 23160 && tick < 23560) {
        //   setCurrentSkip(23560 / browserDelay);
        //   setSkipVideo(true);
        // } else {
        //   setSkipVideo(false);
        // }

        // let tempData = [
        //   {
        //     "start": "01:50.000",
        //     "end": "04:00.000"
        //   },
        //   {
        //     "start": "09:07.000",
        //     "end": "10:22.000"
        //   },
        //   {
        //     "start": "11:13.000",
        //     "end": "13:05.000"
        //   },
        //   {
        //     "start": "14:30.000",
        //     "end": "16:47.000"
        //   },
        //   {
        //     "start": "44:07.000",
        //     "end": "46:24.000"
        //   },
        //   {
        //     "start": "83:14.000",
        //     "end": "88:57.000"
        //   },
        //   {
        //     "start": "89:40.000",
        //     "end": "94:30.000"
        //   },
        //   {
        //     "start": "96:30.000",
        //     "end": "98:10.000"
        //   }
        // ]

        // for (let i = 0; i < tempData.length; i++) {
        //   console.log("start", breakdownTime(tempData[i].start) * browserDelay)
        //   console.log("end", breakdownTime(tempData[i].end) * browserDelay)
        // }



        if ((arraySections.includes(tick) || arrayChapters.includes(tick)) && tick !== 0) {


          for (let i = 0; i < videos[0].chapters.length; i++) {

            const chapter = videos[0].chapters[i];

            let chapterNewTime = breakdownTime(chapter.start)
            chapterNewTime = chapterNewTime * browserDelay; // 250ms workaround

            let chapterEndTime = breakdownTime(chapter.end)
            chapterEndTime = chapterEndTime * browserDelay // 250ms workaround
            
            if (tick === chapterEndTime) {
              setChapterIndicator(i + 1);
            }


            for (let x = 0; x < chapter.sections.length; x++) {
             

              const section = chapter.sections[x];

              let secondsTime = breakdownTime(section.start)
              secondsTime = secondsTime * browserDelay; // 250ms workaround
              secondsTime = secondsTime - 1; // setTimeout alteration

              let secondsTimeEnd = breakdownTime(section.end)
              secondsTimeEnd = secondsTimeEnd * browserDelay; // 250ms workaround
              secondsTimeEnd = secondsTimeEnd - 1; // setTimeout alteration

              let popups = section.popups;


              if (tick === secondsTime) {
         
                setTimeout(() => {
                  // setActivatedMenu([...activatedMenu, chapter.id]);

                  // POPUP ACTION HERE
                  if (popups === 1) {
                    video.pause();
                    setPopupInteraction1(true);
                  }
                  else if (popups === 2) {
                    setPopupInteractionButton2(true);
                  }
                  else if (popups === 3) {
                    video.pause();
                    setPopupInteraction3(true);
                  }
                  else if (popups === 4) {
                    video.pause();
                    setPopupInteraction4(true);
                  }
                  else if (popups === 5) {
                    video.pause();
                    setPopupInteraction5(true);
                  }
                  else if (popups === 6) {
                    video.pause();
                    setPopupInteraction6(true);
                  }
                  else if (popups === 7) {
                    setPopupInteractionButton7(true);
                  }
                  else if (popups === 8) {
                    setPopupInteractionButton8(true);
                  }
                  else if (popups === 9) {
                    setPopupInteraction9(true);
                  }
                  else if (popups === 10) {
                    video.pause();
                    setPopupInteraction10(true);
                  }
                  else if (popups === 11.1) {
                    video.pause();
                    setPopupInteraction11_1(true);
                  }
                  else if (popups === 11.2) {
                    video.pause();
                    setPopupInteraction11_2(true);
                  }
                  else if (popups === 12) {
                    video.pause();
                    setPopupInteraction12(true);
                  }
                  else if (popups === 13.1) {
                    // popup display & link
                    setPopupInteractionButton13_1(true);
                  }
                  else if (popups === 13.2) {
                    // popup display & link
                    setPopupInteractionButton13_2(true);
                  }
                  else if (popups === 13.3) {
                    // popup display & link
                    setPopupInteractionButton13_3(true);
                  }
                  else if (popups === 14) {
                    video.pause();
                    setPopupInteraction14(true);
                  }

                }, 1000);
              }

              if (tick === secondsTimeEnd) {
                setTimeout(() => {
                  if (popups === 2) {
                    setPopupInteractionButton2(false);
                  }
                  else if (popups === 7) {
                    setPopupInteractionButton7(false);
                  }
                  else if (popups === 8) {
                    setPopupInteractionButton8(false);
                  }
                  else if (popups === 9) {
                    setPopupInteraction9(false);
                  }
                  else if (popups === 13.1) {
                    setPopupInteractionButton13_1(false);
                  }
                  else if (popups === 13.2) {
                    setPopupInteractionButton13_2(false);
                  }
                  else if (popups === 13.3) {
                    setPopupInteractionButton13_3(false);
                  }
                }, 1000);
              }

            }
          }

        }

      }, false);

    }

  }, [startVisible]);

  useLayoutEffect(() => {
    // get video element
    video = document.querySelector('video');

    // display warning
    if ((window.innerHeight > window.innerWidth) && !warningDismissed) {
      showWarning();
    }

    // action after video ends
    video.addEventListener('ended', () => window.parent.GetPlayer().SetVar("ccComplete", true), false);

  });

  const [videoProgressState, setVideoProgressState] = useState(videoProgress);

  const setChapterIndicator = (id) => {
    // console.log("id", id)

    const newList = videoProgress.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          // progress: !item.progress,
          progress: true,
        };
        return updatedItem;
      }

      return item;
    });

    // setVideoProgress(newList);
    videoProgress = newList;
    setVideoProgressState(videoProgress);

  }

  const [currentChapter, setCurrentChapter] = useState(0);
  const nextChapter = () => {
    if (currentChapter < videos[0].chapters.length) {
      setCurrentChapter(currentChapter + 1);
      jumpToChapter(videos[0].chapters[currentChapter].start)
      //videos[0].chapters[currentChapter].sections[0].popups

      // console.log(videos[0].chapters[currentChapter])

      hidePopupVideo()
      hideVideoInteractionOne()
      setPopupMandatoryExercise(false)

      // setActivatedMenu([...activatedMenu, videos[0].chapters[currentChapter].id]);
    }
  }

  // open and close menu
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => {
    setMenuVisible(true);
    hideMenuButton();
    video.pause();
  }

  const closeMenu = () => {
    setMenuVisible(false);

    showMenuButton();

    if(
      !popupInteraction1 &&
      !popupInteraction2 &&
      !popupInteraction3 &&
      !popupInteraction4 &&
      !popupInteraction5 &&
      !popupInteraction6 &&
      !popupInteraction7 &&
      !popupInteraction8 &&
      !popupInteraction9 &&
      !popupInteraction10 &&
      !popupInteraction11_1 &&
      !popupInteraction11_2 &&
      !popupInteraction12 &&
      !popupInteraction13_1 &&
      !popupInteraction13_2 &&
      !popupInteraction13_3 
    ){
      video.play();
    }

  }

  // open and close references
  const [referencesVisible, setReferencesVisible] = useState(false);
  const openReferences = () => {
    setReferencesVisible(true);
    if (menuVisible) {
      setMenuVisible(false);
    }
    if (!returnButtonVisible) {
      showReturnButton();
    }
  }

  const closeReferences = () => {
    setReferencesVisible(false);
    if (!menuVisible) {
      setMenuVisible(true);
    }
    if (returnButtonVisible) {
      showReturnButton();
    }
  }

  // show of hide menu button
  const [menuButtonVisible, setMenuButtonVisible] = useState(true);
  const hideMenuButton = () => {
    setMenuButtonVisible(false);
  }
  const showMenuButton = () => {
    setMenuButtonVisible(true)
  }

  // show of hide return button
  const [returnButtonVisible, setReturnButtonVisible] = useState(false);
  const showReturnButton = () => {
    setReturnButtonVisible(true)
  }

  // show of hide warning message
  const [warningDismissed, setWarningState] = useState(false);
  const [warningVisible, setWarningVisible] = useState(false);
  const hideWarning = () => {
    setWarningVisible(false);
    setWarningState(true);
  }
  const showWarning = () => {
    setWarningVisible(true)
  }

  // show of hide interaction 1
  const [videoInteractionOne, setVideoInteractionOne] = useState(false);
  const showVideoInteractionOne = () => {
    setVideoInteractionOne(true);
  }
  const hideVideoInteractionOne = () => {
    setVideoInteractionOne(false);
  }

  // show of hide popup video
  const [popupVideo, setPopupVideo] = useState(false);
  const hidePopupVideo = () => {
    setPopupVideo(false);
    setVideoInteractionOne(true)
  }

  // set video popup
  const [videoPopup, setVideoPopup] = useState(false);

  const showPopupVideo = (video, watched) => {
    setVideoPopup(video);
    setPopupVideo(true)
    setVideoInteractionOne(false)

    setWatchedVideoLocalhost(watched)
  }

  // set video watched
  const [watchedVideo, setWatchedVideo] = useState([]);

  const setWatchedVideoLocalhost = (watched) => {
    var items = localStorage.getItem('watched');
    items = items ? items.split(',') : [];
    items.push(watched);
    localStorage.setItem('watched', items.toString());

    if (!watchedVideo.indexOf(watched) > -1) {
      setWatchedVideo([...watchedVideo, watched]);
    }

  }

  // show of hide popup mandatory exercise
  const [videoMandatoryExercise, setVideoMandatoryExercise] = useState(false);
  const [popupMandatoryExercise, setPopupMandatoryExercise] = useState(false);

  const showPopupMandatoryExercise = () => {
    setVideoMandatoryExercise(true);
    setPopupMandatoryExercise(true);
  }

  const hidePopupMandatoryExercise = () => {
    setVideoMandatoryExercise(false);
    setPopupMandatoryExercise(false);
  }

  const selectOpt = (e, target) => {
    e.stopPropagation();
    target.classList.toggle("active")
  }

  // show of hide popup continue practicing
  const [popupContinuePracticing, setPopupContinuePracticing] = useState(false);

  // show of hide popup video continue practicing
  const [popupVideoContinuePracticing, setPopupVideoContinuePracticing] = useState(false);
  const [popupVideoContinuePracticingButton, setPopupVideoContinuePracticingButton] = useState([]);
  const [videoContinuePracticing, setVideoContinuePracticing] = useState(false);
  const [displayContinuePracticing, setDisplayContinuePracticing] = useState(false);

  const showPopupVideoContinuePracticing = () => {
    hidePopupMandatoryExercise()
    setPopupContinuePracticing(true)
  }

  const showPopupVideoContinuePracticising = (video, id) => {
    setVideoContinuePracticing(false)
    setVideoPopup(video);
    setPopupVideoContinuePracticing(true)
    setPopupContinuePracticing(false)

    setVideoPopupContinuePracticing(video)
    setPopupVideoContinuePracticingButton([...popupVideoContinuePracticingButton, id]);

    setVideoContinuePracticing(true)

    hidePopupMandatoryExercise()
  }

  const hidePopupVideoContinuePracticing = () => {
    setVideoContinuePracticing(false)
    setPopupVideoContinuePracticing(false);
    setPopupContinuePracticing(true)
    setDisplayContinuePracticing(false)

    hidePopupMandatoryExercise()
  }

  const closePopupVideoContinuePracticing = () => {
    hidePopupMandatoryExercise()
    setPopupContinuePracticing(false);
    video.play()
    hidePopupMandatoryExercise()
  }

  useLayoutEffect(() => {
    if(videoContinuePracticing){
      var playerVideoContinuePracticising  = document.querySelector(".popup-continue-practicing video");
      playerVideoContinuePracticising.addEventListener('timeupdate', function () {
          var current_time = playerVideoContinuePracticising.currentTime;
          var duration = playerVideoContinuePracticising.duration;
          if(current_time === duration){
            setDisplayContinuePracticing(true)
            console.log("The correct answers were.")
          }
      });
    }
  }, [videoContinuePracticing]);

  // show or hide popup choose hospital
  const [popupChooseHospital, setPopupChooseHospital] = useState(false);
  const showPopupChooseHospital = () => {
    setPopupChooseHospital(true);
  }
  const hidePopupChooseHospital = () => {
    setPopupChooseHospital(false);
    video.play()
  }

  const [popupChooseHospitalSecond, setPopupChooseHospitalSecond] = useState(false);
  const showPopupChooseHospitalSecond = () => {
    setPopupChooseHospitalSecond(true);
  }
  const hidePopupChooseHospitalSecond = () => {
    setPopupChooseHospitalSecond(false);
    video.play()
  }

  // show or hide popup pre-notification
  const [popupPreNotification, setPopupPreNotification] = useState(false);
  const [popupVideoPreNotificationButton, setPopupVideoPreNotificationButton] = useState([]);
  const [popupVideoPreNotification, setPopupVideoPreNotification] = useState(false);

  const showPopupPreNotification = () => {
    setPopupPreNotification(true);
  }
  const hidePopupPreNotification = () => {
    setPopupPreNotification(false);
  }

  const closePopupPreNotification = () => {
    setPopupVideoPreNotification(false);
    hidePopupPreNotification();
    video.play()
  }
  
  const showPopupVideoPreNotification = (video, id) => {
    setVideoPopup(video);
    setPopupVideoPreNotification(true)
    setPopupVideoPreNotificationButton([...popupVideoPreNotificationButton, id]);

    setVideoPopupContinuePracticing(video)
  }

  const hidePopupVideoPreNotification = () => {
    setPopupVideoPreNotification(false);
    setPopupPreNotification(true)
  }

  const [skipVideo, setSkipVideo] = useState(false);
  
  const videoJsOptions = {
    id: "avt_video_player",
    autoplay: false,
    controls: true,
    fluid: false,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup = {
    id: "avt_video_player",
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const [videoPopupContinuePracticing, setVideoPopupContinuePracticing] = useState(false);

  const videoJsOptionsPopupContinuePracticing= {
    id: "avt_video_player",
    autoplay: false,
    controls: true,
    fluid: true,
    responsive: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: videoPopupContinuePracticing,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopupPreNotification = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: videoPopupContinuePracticing,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }
  
  const StartScreen = () => (
    <div className="start-background" style={{backgroundImage: `url(${startBackground})`}}>
      <button className="start-button" onClick={startVideo}>{videos[0].start_video}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
        </svg>
      </button>
    </div>
  )

  const Menu = () => (
    <div className="menu-background">
      <div className="menu-element">
        <div className="menu-content">
          <div className="menu-header">
            <h1>{videos[0].title}</h1>
            <p>{videos[0].subtitle}</p>
          </div>
          <h3>{videos[0].menu}</h3>
          <ul className="menu-nav">
            <li><button onClick={openReferences} className="icon-references">{videos[0].references}</button></li>
          </ul>
          <h3>{videos[0].sections}</h3>
          {/* <ChaptersList video={videos[0]} jump={jumpToChapter} breakdown={breakdownTime} activatedMenu={activatedMenu} /> */}
          <ChaptersList
            video={videos[0]}
            jump={jumpToChapterList}
            breakdown={breakdownTime}
            progress={videoProgressState}
          />
        </div>
        <button onClick={closeMenu} className="close-button">
          <div className="close-button-content">
            <img src={CloseIcon} className="close-icon" alt="Menu" />
            <span className="close-text">{videos[0].close}</span>
          </div>
        </button>
      </div>
    </div>
  )

  const References = () => (
    <div className="content-background">
      <div className="container">
        <div className="content-flex">
          <div className="content-element">
            <div className="content-title">
              <img src={ReferencesGreenIcon} alt="" />
              <h1>{videos[0].references}</h1>
            </div>
            <div className="content-content">
              <iframe src={referencesDocument} title="References"></iframe>
            </div>
            <button onClick={closeReferences} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
          </div>
        </div>
      </div>
    </div>
  )

  const MenuButton = () => (
    <div className="menu-overlay overlay-layer">
      <button onClick={openMenu} className="menu-button">
        <div className="menu-button-content">
          <img src={MenuIcon} className="menu-icon" alt="Menu" />
          <span className="menu-text">{videos[0].menu}</span>
        </div>
      </button>
    </div>
  )

  const DeviceWarning = () => (
    <div className="warning-overlay">
      <div className="warning-content">
        <p className="warning-text">For the best possible experience, please rotate your mobile device.</p>
        <img src={RotateGif} alt="Rotate device" />
        <button onClick={hideWarning} className="warning-button">Dismiss</button>
      </div>
    </div>
  )

  const jumpVideo = (time) => {
    video.currentTime = time;
  }

  const jumpToChapter = (time) => {

    if (menuVisible) {
      closeMenu();
    }

    video.currentTime = breakdownTime(time);

    video.play();

  }

  const jumpToChapterList = (time, index) => {
    if (menuVisible) {
      closeMenu();
    }
    video.currentTime = breakdownTime(time);

    setCurrentChapter(index + 1);

    video.play();

    if (popupInteractionButton2) {
      setPopupInteractionButton2(false);
    }
    else if (popupInteractionButton7) {
      setPopupInteractionButton7(false);
    }
    else if (popupInteractionButton8) {
      setPopupInteractionButton8(false);
    }
    else if (popupInteraction9) {
      setPopupInteraction9(false);
    }
    else if (popupInteractionButton13_1) {
      setPopupInteractionButton13_1(false);
    }
    else if (popupInteractionButton13_2) {
      setPopupInteractionButton13_2(false);
    }
    else if (popupInteractionButton13_3) {
      setPopupInteractionButton13_3(false);
    }
  }

  const breakdownTime = (start) => {
    let time = start.split(':');
    let min = time[0];
    let sec = time[1];
    min = min * 60;
    time = parseFloat(min) + parseFloat(sec);
    return time;
  }

  const videoJsOptionsPopup4 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc4,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup5 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc5,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup6 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc6,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup7 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc7,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup10 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc10,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const videoJsOptionsPopup14 = {
    id: "avt_video_player",
    autoplay: true,
    controls: true,
    fluid: true,
    responsive: true,
    sources: [
      {
        src: videos[0].vidSrc14,
        // type: 'video/mp4'
        type: 'application/x-mpegURL'
      }
    ],
    userActions: {
      doubleClick: false
    },
    controlBar: {
      fullscreenToggle: false
    }
  }

  const [popupInteraction1, setPopupInteraction1] = useState(false);
  const [popupInteractionButton2, setPopupInteractionButton2] = useState(false);
  const [popupInteraction2, setPopupInteraction2] = useState(false);
  const [popupInteraction3, setPopupInteraction3] = useState(false);
  const [popupInteraction4, setPopupInteraction4] = useState(false);
  const [popupInteraction5, setPopupInteraction5] = useState(false);
  const [popupInteraction6, setPopupInteraction6] = useState(false);
  const [popupInteractionButton7, setPopupInteractionButton7] = useState(false);
  const [popupInteraction7, setPopupInteraction7] = useState(false);
  const [popupInteractionButton8, setPopupInteractionButton8] = useState(false);
  const [popupInteraction8, setPopupInteraction8] = useState(false);
  const [popupInteraction9, setPopupInteraction9] = useState(false);
  const [popupInteraction10, setPopupInteraction10] = useState(false);
  const [popupInteraction11_1, setPopupInteraction11_1] = useState(false);
  const [popupInteraction11_2, setPopupInteraction11_2] = useState(false);
  const [popupInteraction12, setPopupInteraction12] = useState(false);
  const [popupInteractionButton13_1, setPopupInteractionButton13_1] = useState(false);
  const [popupInteraction13_1, setPopupInteraction13_1] = useState(false);
  const [popupInteractionButton13_2, setPopupInteractionButton13_2] = useState(false);
  const [popupInteraction13_2, setPopupInteraction13_2] = useState(false);
  const [popupInteractionButton13_3, setPopupInteractionButton13_3] = useState(false);
  const [popupInteraction13_3, setPopupInteraction13_3] = useState(false);
  const [popupInteraction14, setPopupInteraction14] = useState(false);

  const PopupInteraction1 = () => {
    return (
      <div className="popup-overlay interaction-menu">
        <div className="popup-overlay-content" style={{backgroundImage: `url(${interaction1Image})`}}>
          <div className="popup-overlay-content-flex">
            {/* <h2 className="title">Body Interact Case 69</h2> */}
            <a href="/body-interact-redirect" target="_blank" rel="noreferrer" className="link-button">{videos[0].access_here}</a>
          </div>

          <button onClick={() => {setPopupInteraction1(false); video.play();}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton2 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction2(true); setPopupInteractionButton2(false);}}>{videos[0].download_checklists}</button>
    )
  }

  const PopupInteraction2 = () => {
    return (
      <div className="popup-overlay interaction-2">
        <div className="popup-overlay-content">
          <div>
            <h2 className="title">{videos[0].checklists}</h2>
    
              <ul className="popup-overlay-content-thumb">
                <li>
                  <div className={`player non-clickable`} style={{backgroundImage: `url(${interaction2Orange})`}}></div>
                  <a href={interaction2OrangeFile} target="_blank" rel="noreferrer" className="download-button">{videos[0].download}</a>
                </li>
                <li>
                  <div className={`player non-clickable`} style={{backgroundImage: `url(${interaction2Blue})`}}></div>
                  <a href={interaction2BlueFile} target="_blank" rel="noreferrer" className="download-button">{videos[0].download}</a>
                </li>
                <li>
                  <div className={`player non-clickable`} style={{backgroundImage: `url(${interaction2Purple})`}}></div>
                  <a href={interaction2PurpleFile} target="_blank" rel="noreferrer" className="download-button">{videos[0].download}</a>
                </li>
                <li>
                  <div className={`player non-clickable`} style={{backgroundImage: `url(${interaction2Yellow})`}}></div>
                  <a href={interaction2YellowFile} target="_blank" rel="noreferrer" className="download-button">{videos[0].download}</a>
                </li>
              </ul>
          </div>

          <button onClick={() => {setPopupInteraction2(false); video.play(); setPopupInteractionButton2(true);}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction3 = () => {
    return (
      <div className="popup-overlay interaction-articulate">
        <div className="popup-overlay-content">
          
          <iframe title="Popup3" src={`./storyline/${videos[0].country_code}/${videos[0].storyline_dnd}/story.html`}></iframe>
          
          <button onClick={() => {setPopupInteraction3(false); video.play();}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction4 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup4} />
          <button onClick={() => {setPopupInteraction4(false); video.play();}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction5 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup5} />
          <button onClick={() => {setPopupInteraction5(false); video.play();}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction6 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup6} />
          <button onClick={() => {setPopupInteraction6(false); video.play();}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton7 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction7(true); setPopupInteractionButton7(false);}}>{videos[0].access_nihss_training}</button>
    )
  }

  const PopupInteraction7 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup7} />
          <button onClick={() => {setPopupInteraction7(false); video.play(); setPopupInteractionButton7(true);}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton8 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction8(true); setPopupInteractionButton8(false);}}>{videos[0].download_aha_asa_guidelines}</button>
    )
  }

  const PopupInteraction8 = () => {
    return (
      <div className="popup-overlay interaction-8">
        <div className="popup-overlay-content">
          <div>
            <div className="row">
              <div className="col">
                <h2 className="title">{videos[0].mild_or_severe_stroke_symptoms}</h2>
              </div>
              <div className="col">
                <h2 className="title">{videos[0].pre_existing_disablility}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="image-placeholder">
                  <img src={interaction8aImage} alt="" />
                </div>
                {/* <a href={interaction8a} target="_blank" rel="noreferrer" className="link-button">Download</a> */}
              </div>
              <div className="col">
                <div className="image-placeholder">
                  <img src={interaction8bImage} alt="" />
                </div>
                {/* <a href={interaction8b} target="_blank" rel="noreferrer" className="link-button">Download</a> */}
              </div>
            </div>
            <a href={interaction8a} target="_blank" rel="noreferrer" className="link-button">{videos[0].download}</a>
            
          </div>

          <button onClick={() => {setPopupInteraction8(false); video.play(); setPopupInteractionButton8(true);}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction9 = () => {
    return (
      <a href={interaction9} target="_blank" rel="noreferrer" className="interaction-9 overlay-layer">{videos[0].download_checklist}</a>
    )
  }

  const PopupInteraction10 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup10} />
          <button onClick={() => {setPopupInteraction10(false); video.play();}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction11_1 = () => {
    return (
      <div className="popup-overlay interaction-articulate">
        <div className="popup-overlay-content">
          
          <iframe title="Popup11_1" src={`./storyline/${videos[0].country_code}/${videos[0].storyline_tab_a}/story.html`}></iframe>
          
          <button onClick={() => {setPopupInteraction11_1(false); video.play();}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction11_2 = () => {
    return (
      <div className="popup-overlay interaction-articulate">
        <div className="popup-overlay-content">
          
          <iframe title="Popup11_2" src={`./storyline/${videos[0].country_code}/${videos[0].storyline_tab_b}/story.html`}></iframe>
          
          <button onClick={() => {setPopupInteraction11_2(false); video.play();}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction12 = () => {
    return (
      <div className="popup-overlay interaction-articulate">
        <div className="popup-overlay-content">
          
          <iframe title="Popup12" src={`./storyline/${videos[0].country_code}/${videos[0].storyline_dnd}/story.html`}></iframe>
          
          <button onClick={() => {setPopupInteraction12(false); video.play();}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton13_1 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction13_1(true); setPopupInteractionButton13_1(false);}}>{videos[0].access_body_interact_case}</button>
    )
  }

  const PopupInteraction13_1 = () => {
    return (
      <div className="popup-overlay interaction-menu">
        <div className="popup-overlay-content" style={{backgroundImage: `url(${interaction13aImage})`}}>
          <div className="popup-overlay-content-flex">
            {/* <h2 className="title">Body Interact Case 33</h2> */}
            <a href="/body-interact-redirect" target="_blank" rel="noreferrer" className="link-button">{videos[0].access_here}</a>
          </div>

          <button onClick={() => {setPopupInteraction13_1(false); video.play(); setPopupInteractionButton13_1(true);}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton13_2 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction13_2(true); setPopupInteractionButton13_2(false);}}>{videos[0].access_body_interact_case}</button>
    )
  }

  const PopupInteraction13_2 = () => {
    return (
      <div className="popup-overlay interaction-menu">
        <div className="popup-overlay-content" style={{backgroundImage: `url(${interaction13bImage})`}}>
          <div className="popup-overlay-content-flex">
            {/* <h2 className="title">Body Interact Case 36</h2> */}
            <a href="/body-interact-redirect" target="_blank" rel="noreferrer" className="link-button">{videos[0].access_here}</a>
          </div>

          <button onClick={() => {setPopupInteraction13_2(false); video.play(); setPopupInteractionButton13_2(true);}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteractionButton13_3 = () => {
    return (
      <button className="interaction-button overlay-layer" onClick={() => {video.pause(); setPopupInteraction13_3(true); setPopupInteractionButton13_3(false);}}>{videos[0].access_body_interact_case}</button>
    )
  }

  const PopupInteraction13_3 = () => {
    return (
      <div className="popup-overlay interaction-menu">
        <div className="popup-overlay-content" style={{backgroundImage: `url(${interaction13cImage})`}}>
          <div className="popup-overlay-content-flex">
            {/* <h2 className="title">Body Interact Case 291</h2> */}
            <a href="/body-interact-redirect" target="_blank" rel="noreferrer" className="link-button">{videos[0].access_here}</a>
          </div>

          <button onClick={() => {setPopupInteraction13_3(false); video.play(); setPopupInteractionButton13_3(true);}} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupInteraction14 = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup14} />
          <button onClick={() => {setPopupInteraction14(false); video.play();}} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const VideoInteractionPopupOne = () => (
    <div className="video-interaction-overlay">

      <div className="video-interaction-overlay-container">


        <PopupInteraction
          color="green"
          title="Mild"
          contentLeft="0 1"
          contentCenterTitle="No symptoms."
          contentCenterDescription="No significant disability. Able to carry out all usual activities, despite some symptoms."
          icon={MildIcon}
          watchAgainIcon={WatchAgainIcon}
          playIcon={PlayIcon}
          showPopupVideo={showPopupVideo}
          video={videos[0].vidSrc}
          watchedVideo={watchedVideo}
          hideShowPopupVideo="mild"
        />

        <PopupInteraction
          color="blue"
          title="Moderate"
          contentLeft="2 3"
          contentCenterTitle="No symptoms."
          contentCenterDescription="No significant disability. Able to carry out all usual activities, despite some symptoms."
          icon={ModerateIcon}
          watchAgainIcon={WatchAgainIcon}
          playIcon={PlayIcon}
          showPopupVideo={showPopupVideo}
          video={videos[0].vidSrc}
          watchedVideo={watchedVideo}
          hideShowPopupVideo="moderate"
        />

        <PopupInteraction
          color="red"
          title="Severe"
          contentLeft="4 5"
          contentCenterTitle="No symptoms."
          contentCenterDescription="No significant disability. Able to carry out all usual activities, despite some symptoms."
          icon={SevereIcon}
          watchAgainIcon={WatchAgainIcon}
          playIcon={PlayIcon}
          showPopupVideo={showPopupVideo}
          video={videos[0].vidSrc}
          watchedVideo={watchedVideo}
          hideShowPopupVideo="severe"
        />

        <PopupInteraction
          color="gray"
          title="Dead"
          contentLeft="6"
          contentCenterTitle="No symptoms."
          contentCenterDescription=""
          icon={DeadIcon}
          watchAgainIcon={WatchAgainIcon}
          playIcon={PlayIcon}
          showPopupVideo={showPopupVideo}
          video={videos[0].vidSrc}
          watchedVideo={watchedVideo}
          hideShowPopupVideo="dead"
        />


        <div className={`continue-overlay overlay-layer ${watchedVideo.length > 2 ? "d-block" : "d-none"}`}>
          <button onClick={nextChapter} type="button" className="continue-button" data-toggle="tooltip" data-placement="left" title="Next Chapter">
            <div className="continue-button-content">
              <span className="continue-text">Continue</span>
            </div>
          </button>
        </div>
      </div>

    </div>
  )

  const PopupVideo = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopup} />
          <button onClick={hidePopupVideo} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupMandatoryExerciseAnswers =  () => {
    const [displayMandatoryExerciseAnswer, setDisplayMandatoryExerciseAnswer] = useState(false);

    useLayoutEffect(() => {
      if(videoMandatoryExercise){
        var playerVideoMandatoryExercise = document.querySelector(".popup-overlay-content-mandatory-exercise video");
  
        playerVideoMandatoryExercise.addEventListener('timeupdate', function () {
            var current_time = playerVideoMandatoryExercise.currentTime;
            var duration = playerVideoMandatoryExercise.duration;
            if(current_time === duration){
              console.log("The correct answers were.")
              setDisplayMandatoryExerciseAnswer(!displayMandatoryExerciseAnswer)
            }
        });
      }
  
    }, [videoMandatoryExercise]);

    return (
      <div className="popup-overlay-content-mandatory-exercise">
        
        {displayMandatoryExerciseAnswer   && (
        <div className={`display-correct-answer d-flex`}>
            <div className="title">The correct answers were…</div>
            <div className="content">
              <div className="answer"><span></span> Facial droop</div>
              <div className="answer">Arm drift</div>
              <div className="answer"><span></span> Speech</div>
            </div>

            <div className="continue-overlay overlay-layer btn-exercise">
              <button onClick={() => showPopupVideoContinuePracticing() } type="button"
                className="continue-button"
                data-toggle="tooltip" data-placement="left" title="Next Chapter">
                <div className="continue-button-content">
                  <span className="continue-text">Continue</span>
                </div>
              </button>
            </div>
          </div>
          )}
          
            <VideoPlayer {...videoJsOptionsPopup} />
      </div>
    )
  }

  const PopupMandatoryExerciseBars =  () => {
    return (
      <div className="bar-exercise bar-mandatory-exercise">
          <div className="content">
            <div className="title">Select the symptoms you see in the video</div>
            <div id="m_e_answer_1" className={`answer m_e_answer_1`} onClick={e => selectOpt(e, e.target)}>Facial droop</div>
            <div id="m_e_answer_2" className={`answer m_e_answer_2`} onClick={e => selectOpt(e, e.target)}>Arm drift</div>
            <div id="m_e_answer_3" className={`answer m_e_answer_3`} onClick={e => selectOpt(e, e.target)}>Speech</div>
          </div>
        </div>
    )
  }

  const PopupMandatoryExercise = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <PopupMandatoryExerciseAnswers/>
        </div>
          
        <PopupMandatoryExerciseBars/>
      </div>
    )
  }

  const PopupVideoContinuePracticing = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content popup-continue-practicing">
          <div className={`display-correct-answer ${displayContinuePracticing ? "d-flex" : "d-none"}`}>
            <div className="title">The correct answers were…</div>
            <div className="content">
              <div className="answer"><span></span> Facial droop</div>
              <div className="answer">Arm drift</div>
              <div className="answer"><span></span> Speech</div>
            </div>

            <div className="continue-overlay overlay-layer btn-exercise">
              <button onClick={hidePopupVideoContinuePracticing} type="button"
                className="continue-button"
                data-toggle="tooltip" data-placement="left" title="Next Chapter">
                <div className="continue-button-content">
                  <span className="continue-text">Continue</span>
                </div>
              </button>
            </div>
          </div>
          <VideoPlayer {...videoJsOptionsPopupContinuePracticing} />
          <button onClick={hidePopupVideoContinuePracticing} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>

        <div className="bar-exercise">
          <div className="content">
            <div className="title">Select the symptoms you see in the video</div>
            <div className={`answer c_p_answer_4`} onClick={({target}) => target.classList.toggle('active')}>Facial droop</div>
            <div className={`answer c_p_answer_5`} onClick={({target}) => target.classList.toggle('active')}>Arm drift</div>
            <div className={`answer c_p_answer_6`} onClick={({target}) => target.classList.toggle('active')}>Speech</div>
          </div>
        </div>
        
      </div>
    )
  }

  const PopupContinuePracticing = () => {
    return (
      <div className="popup-overlay continue-practicing">
        <div className="popup-overlay-content">
          <div>
            <h2 className="title">Continue Practicing</h2>
    
              <ul className="popup-overlay-content-thumb">
                <li>
                  <div className={`player ${popupVideoContinuePracticingButton.indexOf("btn_c_p_1") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_1') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoContinuePracticingButton.indexOf("btn_c_p_1") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_1') }><img src={WatchAgainIcon} alt="Watch Again" /></div>

                  <h3>Video description</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                  <div className={`player ${popupVideoContinuePracticingButton.indexOf("btn_c_p_2") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_2') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoContinuePracticingButton.indexOf("btn_c_p_2") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_2') }><img src={WatchAgainIcon} alt="Watch Again" /></div>
                  <h3>Video description</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                  <div className={`player ${popupVideoContinuePracticingButton.indexOf("btn_c_p_3") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_3') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoContinuePracticingButton.indexOf("btn_c_p_3") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_3') }><img src={WatchAgainIcon} alt="Watch Again" /></div>
                  <h3>Video description</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                  <div className={`player ${popupVideoContinuePracticingButton.indexOf("btn_c_p_4") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_4') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoContinuePracticingButton.indexOf("btn_c_p_4") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoContinuePracticising(videos[0].vidSrc, 'btn_c_p_4') }><img src={WatchAgainIcon} alt="Watch Again" /></div>
                  <h3>Video description</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                
              </ul>
          </div>

          <button onClick={closePopupVideoContinuePracticing} className={`popup-button d-block`}><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const PopupChooseHospital = () => {
    return (
      <div className="popup-overlay continue-practicing">
        <div className="popup-overlay-content">
          <div>
            <h2 className="title">Continue Practicing</h2>
            <TabInteraction/>
          </div>

          <div className="continue-overlay overlay-layer button-tab-card">
            
          <button onClick={ hidePopupChooseHospital} type="button" className="continue-button" data-toggle="tooltip" data-placement="left" title="Continue">
              <div className="continue-button-content">
                <span className="continue-text">Continue </span>
              </div>
            </button>
            
          </div>
        </div>
      </div>
    )
  }

  const PopupChooseHospitalSecond = () => {
    return (
      <div className="popup-overlay continue-practicing">
        <div className="popup-overlay-content">
          <div>
            <h2 className="title">Continue Practicing</h2>
            <h3 className="sub-title">Take for example Bulgaria, where, in the past, 134 hospitals admitted stroke patients, but only 34 offered recanalization therapy1.</h3>
            <CardInteraction/>
          </div>

          <div className="continue-overlay overlay-layer button-tab-card">
            
            <button onClick={ hidePopupChooseHospitalSecond} type="button" className="continue-button" data-toggle="tooltip" data-placement="left" title="Continue">
                <div className="continue-button-content">
                  <span className="continue-text">Continues</span>
                </div>
              </button>
              
          </div>
        </div>
      </div>
    )
  }

  const PopupVideoPreNotification  = () => {
    return (
      <div className="popup-overlay">
        <div className="popup-overlay-content">
          <VideoPlayer {...videoJsOptionsPopupPreNotification} />
          <button onClick={hidePopupVideoPreNotification} className="popup-button"><img src={CloseIcon2} alt="Close" /></button>
        </div>
      </div>
    )
  }

  const displayCloseButtonPreNotification = (first,  second) => {
    const indexArray = first.map(el => {
        return second.indexOf(el);
    });
    return indexArray.indexOf(-1) === -1;
  }

  const PopupPreNotification = () => {
    return (
      <div className="popup-overlay  pre-notification">
        <div className="popup-overlay-content">
          <div>
            <h2 className="title">Pre-notification</h2>
            <h3 className="sub-title">Lorem ipsum sit dolor amet</h3>
    
              <ul className="popup-overlay-content-thumb">
                <li>
                  <div className={`player ${popupVideoPreNotificationButton.indexOf("btn_p_n_1") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoPreNotification(videos[0].vidSrc, 'btn_p_n_1') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoPreNotificationButton.indexOf("btn_p_n_1") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoPreNotification(videos[0].vidSrc, 'btn_p_n_1') }><img src={WatchAgainIcon} alt="Watch Again" /></div>

                  <h3>Without</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
                <li>
                  <div className={`player ${popupVideoPreNotificationButton.indexOf("btn_p_n_2") > -1 ? "d-none" : ""}`} onClick={()=> showPopupVideoPreNotification(videos[0].vidSrc, 'btn_p_n_2') }><img src={PlayIcon} alt="Play" /></div>
                  <div className={`player watch-again ${popupVideoPreNotificationButton.indexOf("btn_p_n_2") > -1 ? "" : "d-none"}`} onClick={()=> showPopupVideoPreNotification(videos[0].vidSrc, 'btn_p_n_2') }><img src={WatchAgainIcon} alt="Watch Again" /></div>
                  <h3>With</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </li>
              </ul>
          </div>

          <div className="continue-overlay overlay-layer">
            
       
            <button onClick={ closePopupPreNotification} type="button"  className={`continue-button ${displayCloseButtonPreNotification(["btn_p_n_1", "btn_p_n_2"], popupVideoPreNotificationButton) ? "d-block" : "d-none"}`} data-toggle="tooltip" data-placement="left" title="Continue">
              <div className="continue-button-content">
                <span className="continue-text">Continue </span>
              </div>
            </button>
    
          </div>
        </div>
      </div>
    )
  }

  const SkipVideo = () => {

    return (
      <div className="skip-video">
        <div className="skip-video-content">
          {/* <button onClick={nextChapter} className="skip-video-button"><img src={SkipVideoButton} alt="Skip Video" /></button> */}
          <button onClick={() => jumpVideo(currentSkip)} className="skip-video-button"><img src={SkipVideoButton} alt="Skip Video" /></button>
        </div>
      </div>
    )
  }

  return (
    <div className="video-group">
      <VideoPlayer {...videoJsOptions} />
      { skipVideo ? <SkipVideo /> : null}
      { startVisible ? <StartScreen /> : null}
      { menuButtonVisible ? <MenuButton /> : null}
      { menuVisible ? <Menu /> : null}
      { referencesVisible ? <References /> : null}
      { warningVisible ? <DeviceWarning /> : null}
      { popupInteraction1 ? <PopupInteraction1 /> : null}
      { popupInteractionButton2 && !menuVisible ? <PopupInteractionButton2 /> : null}
      { popupInteraction2 ? <PopupInteraction2 /> : null}
      { popupInteraction3 ? <PopupInteraction3 /> : null}
      { popupInteraction4 ? <PopupInteraction4 /> : null}
      { popupInteraction5 ? <PopupInteraction5 /> : null}
      { popupInteraction6 ? <PopupInteraction6 /> : null}
      { popupInteractionButton7 && !menuVisible ? <PopupInteractionButton7 /> : null}
      { popupInteraction7 ? <PopupInteraction7 /> : null}
      { popupInteractionButton8 && !menuVisible ? <PopupInteractionButton8 /> : null}
      { popupInteraction8 ? <PopupInteraction8 /> : null}
      { popupInteraction9 ? <PopupInteraction9 /> : null}
      { popupInteraction10 ? <PopupInteraction10 /> : null}
      { popupInteraction11_1 ? <PopupInteraction11_1 /> : null}
      { popupInteraction11_2 ? <PopupInteraction11_2 /> : null}
      { popupInteraction12 ? <PopupInteraction12 /> : null}
      { popupInteractionButton13_1 && !menuVisible ? <PopupInteractionButton13_1 /> : null}
      { popupInteraction13_1 ? <PopupInteraction13_1 /> : null}
      { popupInteractionButton13_2 && !menuVisible ? <PopupInteractionButton13_2 /> : null}
      { popupInteraction13_2 ? <PopupInteraction13_2 /> : null}
      { popupInteractionButton13_3 && !menuVisible ? <PopupInteractionButton13_3 /> : null}
      { popupInteraction13_3 ? <PopupInteraction13_3 /> : null}
      { popupInteraction14 ? <PopupInteraction14 /> : null}
    </div>
  )
} 

export default VideoElement;
