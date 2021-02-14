import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isplaying, setisplaing }) => {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setisplaing(!isplaying);
    } else {
      audioRef.current.play();
      setisplaing(!isplaying);
    }
  };

  const timeupdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currenTime: current, duration });
  };
  const [songInfo, setSongInfo] = useState({
    currenTime: 0,
    duration: 0,
  });

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currenTime: e.target.value });
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currenTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currenTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skipback" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="pLay"
          size="2x"
          icon={isplaying ? faPlay : faPause}
        />
        <FontAwesomeIcon className="skipforwar" size="2x" icon={faAngleRight} />
      </div>
      <audio
        onTimeUpdate={timeupdateHandler}
        onLoadedMetadata={timeupdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
