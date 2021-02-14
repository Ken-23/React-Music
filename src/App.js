import React, { useState } from "react";
import Song from "./componets/Song";
import Player from "./componets/player";
import "./style/app.scss";
import Library from "./componets/library";
import chillHop from "../src/data";

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  const [isplaying, setisplaing] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isplaying={isplaying}
        setisplaing={setisplaing}
      />
      <Library songs={songs} setcurrentSong={setcurrentSong}/>
    </div>
  );
}

export default App;
