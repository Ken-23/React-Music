import React, { useState, useRef } from "react";
import Song from "./componets/Song";
import Player from "./componets/player";
import "./style/app.scss";
import Library from "./componets/library";
import chillHop from "../src/data";
import Nav from "./componets/Nav";

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isplaying, setisplaing] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currenTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeupdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currenTime: current, duration });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        currentSong={currentSong}
        isplaying={isplaying}
        setisplaing={setisplaing}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setcurrentSong={setcurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setcurrentSong={setcurrentSong}
        isplaying={isplaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeupdateHandler}
        onLoadedMetadata={timeupdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
