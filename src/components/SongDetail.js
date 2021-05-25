import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    <div>
      {selectedSong === null ? "" : `Title: ${selectedSong.title}`}
      {selectedSong === null ? "" : `Duration: ${selectedSong.duration}`}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
