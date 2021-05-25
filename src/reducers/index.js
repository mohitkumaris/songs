import { combineReducers } from "redux";

/**
 *
 * @returns Initial State
 */
const songReducer = () => {
  return [
    { title: "hey rama", duration: "4:30" },
    { title: "radha", duration: "3:40" },
    { title: "chahateein", duration: "5:30" },
    { title: "intezaar", duration: "1:20" },
  ];
};
/**
 *
 * @param {*} songSelected
 * @param {*} action
 * @returns Initial State
 */
const songSelected = (songSelected = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return songSelected;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: songSelected,
});
