import {combineReducers} from "redux";

// That reducer returned static list of songs for example
const songsReducer = () => {
    return [
        {title: 'THANK U, NEXT', duration: '3:08'},
        {title: 'DOESN’T MATTER', duration: '2:58'},
        {title: 'PARTY FOR ONE', duration: '4:01'},
        {title: 'MISSING U', duration: '3:37'}
    ];
};

// Reducer for select current song received from action
const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
        case 'SELECT_SONG':
            return action.payload;
        default:
            return selectedSong;
    }
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});