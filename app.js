var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the waves", "3:43");
var larena = new Song('L\'Arena', 'Ennio Morricone', '5:00');

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(larena);

var playlistElement = document.getElementById("playlist");

playlist.renderIn(playlistElement);

var playButton = document.getElementById("play");
var nextButton = document.getElementById("next");
var stopButton = document.getElementById("stop");

playButton.onclick = function() {
  playlist.play();
  playlist.renderIn(playlistElement);
};
nextButton.onclick = function() {
  playlist.next();
  playlist.renderIn(playlistElement);
};
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderIn(playlistElement);
};