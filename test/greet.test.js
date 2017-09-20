'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe('Greet', function(){

  it('should return hello and argument when called', function(){

    expect(greet('world')).toEqual('hello world');

  });
});


describe('Greet', function(){

  it('should return null when the argument isn\'t a string', function(){

    expect(greet(3)).toBe(null);

  });
});
