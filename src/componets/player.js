import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  isplaying,
  setisplaing,
}) => {
  const playSongHandler = () => {
    if (isplaying) {
      audioRef.current.pause();
      setisplaing(!isplaying);
    } else {
      audioRef.current.play();
      setisplaing(!isplaying);
    }
  };

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
          max={songInfo.duration || 0}
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
          icon={isplaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="skipforwar" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
