// Action Creater
export const selectSong = (song) => {
  //return an Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
