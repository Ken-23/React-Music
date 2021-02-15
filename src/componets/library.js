import react from "react";
import LibrarySong from "./librarySong";

const Library = ({ songs, setcurrentSong, audioRef }) => {
  return (
    <div className="library">
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
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
