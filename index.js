var Emitter = require('component-emitter');
var events = require('component-events');

function VideoEmitter(video, markers){
  if (!(this instanceof VideoEmitter))
    return new VideoEmitter(video, markers);
  this.video = video;
  this.markers = markers;
  this.bind();
}

module.exports = VideoEmitter;

Emitter(VideoEmitter.prototype);

VideoEmitter.prototype.bind = function(){
  this.events = events(this.video, this);
  this.events.bind('timeupdate');
};

VideoEmitter.prototype.unbind = function(){
  this.events.unbind();
};

// consider using 1s interval if performance becomes an issue.
VideoEmitter.prototype.ontimeupdate = function(d){
  var current = this.video.currentTime | 0;
  if (this.currentSeconds === current) return;
  this.currentSeconds = current;
  var currentMarker = this.markers[current];
  if (currentMarker) this.emit('marker', current, currentMarker);
};