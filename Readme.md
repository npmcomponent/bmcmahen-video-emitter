*This repository is a mirror of the [component](http://component.io) module [bmcmahen/video-emitter](http://github.com/bmcmahen/video-emitter). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-video-emitter`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# video-emitter

  emit an event when playback reaches specified points

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/video-emitter

## API

### new VideoEmitter(video, markers);

`video` is the HTML5 video that emits timeupdate events, and `markers` is an object with `seconds` (int) as keys.

## Example

```javascript
var VideoEmitter = require('video-emitter');
var vidEl = document.querySelector('video');
var markers = {
  5: {
    'duration': 10,
    'content': 'Bacon is tasty, but unhealthy.'
  },
  22: {
    'duration': 14,
    'name': 'Ninja Turtle',
    'content': 'Ninja Turtles like pizza.'
  }
}
var myEmitter = new VideoEmitter(vidEl, markers);
myEmitter.on('marker', function(seconds, obj){
  console.log(time, content);
  // 5, 'Bacon is tasty....'
});
```


## License

  MIT
