var Bacon = require('baconjs'),
    ConsoleUtilities = require('./ConsoleUtilities'),
    concrete = require('concrete-runtime'),
    fs = require('fs');

var INTERVAL = 750;
var FILE_NAME = process.argv[2];

fs.readFile(FILE_NAME, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var stream = concrete.BaconUniverse.asStream(concrete.Universe.fromString(data))
    .bufferingThrottle(INTERVAL);

  stream.filter(function (d) { return !(d[0] && d[0] == '<no-more>'); })
    .onValue(ConsoleUtilities.printUniverse)

  stream.filter(function (d) { return (d[0] && d[0] == '<no-more>'); })
    .onValue(function () { return process.exit(); })
});

