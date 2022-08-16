// import React, { useState, useLayoutEffect } from 'react';
import React from 'react';


const ChaptersList = (props) => {

    let video;
    // let videoTime;

    // const [myVidTime, setMyVidTime] = useState(null);
    
    // useLayoutEffect(() => {
        
    //     // get video element
    //     video = document.querySelector('video');
        
    //     // capture latest video time
    //     video.addEventListener('timeupdate', function() {
    //         setMyVidTime(video.currentTime)
    //     }, false);
        
    //     // console.log("currentTime", video.currentTime)
        
    // }, [])
    
    const renderIcon = (data, index) => {

        // videoTime = myVidTime;
        
        // const chapterStartTime = props.breakdown(data.start);
        // const chapterEndTime = props.breakdown(data.end);
        const chapterTitle = data.title;
        const chapterProgress = data.progress;
        const chapterLabel = data.label;

        // console.log("videoTime", videoTime)

        // if ((chapterStartTime <= videoTime && chapterEndTime >= videoTime) && videoTime != null) {
        //     return (
        //         <button onClick={() => props.jump(data.start, index)} className="menu-active">
        //             <p className="menu-section-item">{chapterTitle}</p>
        //             <small>{chapterLabel}</small>
        //         </button>
        //     )
        // }
        // else if (chapterProgress === true) {
        if (chapterProgress === true) {
            return (
                <button onClick={() => props.jump(data.start, index)} className="menu-active">
                    <p className="menu-section-item">{chapterTitle}</p>
                    <small>{chapterLabel}</small>
                </button>
            )
        }
        else if (chapterProgress === false) {
            return (
                <button onClick={() => props.jump(data.start, index)}>
                    <p className="menu-section-item">{chapterTitle}</p>
                    <small>{chapterLabel}</small>
                </button>
            )
        }
    }

    return (
        <ul className="menu-sections">
            {props.progress.map((chapter, index) =>
                <li key={chapter.id}>
                    {renderIcon(chapter, index)}
                </li>
            )}
        </ul>
    );
}

export default ChaptersList;