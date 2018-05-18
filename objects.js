var playlist = {
  JimiHendrix: 'Little Wing',
  Radiohead: 'Paranoid Android'
}
function updatePlaylist(playlist, artistName, songTitle){
 playlist[artistName] = songTitle
 return playlist
}