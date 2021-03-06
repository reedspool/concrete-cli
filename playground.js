/*- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -~- -*/
/*
/* PLAY SPACE for debugger NOT TO BE INCLUDED BY ANY CODEz
/*
/*
/* Author: [Reed](https://github.com/reedspool)
/*
/*- -~- -*/
var Bacon = require('baconjs'),
    _ = require('lodash'),
    assert = require('assert'),
    concrete = require('concrete-runtime');


var Universe = concrete.Universe.fromString('0#A 1 + _#B 30 > _ 4 0 ? _ jump @B @A move 0 jump')
try {
  debugger
  while (Universe.alive) {
    Universe.step()
  }
} catch (e) {
  debugger;
  console.log(e.stack)
}
