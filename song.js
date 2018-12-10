function Song(title, artist, duration) {
  // this.title = title;
  // this.duration = duration;
  // this.isPlaying = false;

  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);

// Song.prototype.play = function() {
//   this.isPlaying = true;
//  };

// Song.prototype.stop = function() {
//     this.isPlaying = false;

// };

Song.prototype.toHTML = function() {

  var htmlString = '<li';
  if(this.isPlaying){
  htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString +='<span class="duration">';
  htmlString += this.duration;
  htmlString +='</span></li>';

  return htmlString;

};