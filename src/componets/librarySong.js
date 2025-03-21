import React from "react";
import { playAudio } from "../Util";

const LibrarySong = ({
  song,
  songs,
  setcurrentSong,
  id,
  audioRef,
  isplaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setcurrentSong(selectedSong[0]);
    // Add Active Song
    const newSongs = songs.map((song) => {
      if (song.id === id) {
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
    });
    setSongs(newSongs);
    //Check if THE song is playing
    playAudio(isplaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
