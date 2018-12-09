function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  console.log(currentSong);
  currentSong.play();
};

Playlist.prototype.stop = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  console.log(this);
  this.stop();
  this.nowPlayingIndex++;

  if(this.nowPlayingIndex === this.songs.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
  // console.log(currentSong);
};

Playlist.prototype.renderIn = function(list) {
  list.innerHTML = "";
  for (var i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }

};