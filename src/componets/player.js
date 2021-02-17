import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleRight,
  faAngleLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { playAudio } from "../Util";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  isplaying,
  setisplaing,
  songs,
  setcurrentSong,
  setSongs,
}) => {
  //UseEffect
  useEffect(() => {
    const newSongs = songs.map(
      (song) => {
        if (song.id === currentSong.id) {
          return {
            ...song,
            active: true,
          };
        } else {
          return {
            ...song,
            active: false,
          };
        }
      },
      [currentSong]
    );
    setSongs(newSongs);
  });
  //Event Handlers
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
  const SkipTrackhandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    if (direction === "skip-forward") {
      setcurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setcurrentSong(songs[songs.length - 1]);
        playAudio(isplaying, audioRef);
        return;
      }
      setcurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playAudio(isplaying, audioRef);
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
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => SkipTrackhandler("skip-back")}
          className="skipback"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="pLay"
          size="2x"
          icon={isplaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => SkipTrackhandler("skip-forward")}
          className="skipforwar"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
