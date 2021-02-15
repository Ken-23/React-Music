import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import LibrarySong from "./librarySong";

const Library = ({
  songs,
  setcurrentSong,
  audioRef,
  isplaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setcurrentSong={setcurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isplaying={isplaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
