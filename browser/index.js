
// Declare in global scope so we have access for debugging
$ = require('jquery')
nomv = require('nomv')

$.getJSON(config.resource_server + "song_index.json", function(newdata, status) {
  if (status == "success") {
    newdata.songs.forEach(function(song){
      $("#song-selector").append($('<option>', {
        value: song.filename,
        text : song.title
      }));
    });
    nomv.run(config.resource_server);
  } else {
    alert("Failed to load json: " + status);
  }
});
