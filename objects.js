var playlist = {
  JimiHendrix: 'Little Wing',
  Radiohead: 'Paranoid Android'
}
function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, artistName, songTitle)
}