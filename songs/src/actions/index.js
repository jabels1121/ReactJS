// Action creator
export const selectSong = song => {
    // Return an action was able a plain js object.
    return {
        type: 'SELECT_SONG',
        payload: song
    };
};