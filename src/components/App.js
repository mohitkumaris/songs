import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

// import { selectSong } from "../actions"; // Named export thats why {}

const App = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <div className="ui container grid">
        <div className="ui row">
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            Song Detail <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
