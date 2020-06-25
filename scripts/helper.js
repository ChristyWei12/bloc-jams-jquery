class Helper {
  playPauseAndUpdate(song) {
    $('#time-control .total-time').text( this.prettyTime(song.duration) );
    player.playPause(song);
  }

  prettyTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return minutes + ":" + seconds;
  }
}

const helper = new Helper();
