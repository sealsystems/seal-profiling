'use strict';

const assert = require('assertthat');

const profiling = require('../lib/profiling');

suite('profiling', () => {
  test('is an object.', (done) => {
    assert.that(profiling).is.ofType('object');
    done();
  });

  suite('noteValue', () => {
    test('is a function.', (done) => {
      assert.that(profiling.noteValue).is.ofType('function');
      done();
    });
  });
});
