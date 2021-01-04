'use strict';
// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('substitution', () => {
  it('should return false if the scrambled alphabet is not 26 characters', () => {
    const actual = substitution('hello', 'abc');
    expect(actual).to.be.equal(false);
  });
  it('should return false if there is a duplicate character in the scrambled alphabet', () => {
    const actual = substitution('hello', 'plloknijbuhvygctfxrdzeswaq');
    expect(actual).to.be.equal(false);
  });
});
