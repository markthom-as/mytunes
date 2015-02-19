// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song){
      if(this.length < 2){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    this.at(0).play();
  }

});
