import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui primary button"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

/**
 *
 * @param {} state
 * @returns State from Provider
 */
const mapStateToProps = (state) => {
  return { songs: state.songs };
};
// Passing action to connect function
export default connect(mapStateToProps, { selectSong })(SongList);
