var echojs = require('echojs');
var echo = echojs({key: process.env.ECHONEST_KEY});

module.exports = (app) => {
  app.get('/songs/echonest/search', (req, res) => {
    echo('song/search').get({
      artist: req.query.artist,
      title: req.query.title,
      bucket: ['id:musicbrainz','id:spotify','song_hotttnesss','song_currency','tracks'],
      song_type: 'studio'
    }, function (err, json) {
      res.send(json.response);
    });
  });

  app.get('/songs/echonest/tracks/:id', (req, res) => {
    echo('track/profile').get({
      id: req.params.id,
      bucket: 'audio_summary'
    }, function(err, json) {
      res.send(json.response);
    });
  });
}