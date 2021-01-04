'use strict';
// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');

describe('caesar', () => {
  it('should return false if shift value is equal to 0', () => {
    const actual = caesar('hello', 0);
    expect(actual).to.be.equal(false);
  });
  it('should return false if shift is greater than 25', () => {
    const actual = caesar('hello', 26);
    expect(actual).to.be.equal(false);
  });
  it('should return false if shift is less than -25', () => {
    const actual = caesar('hello', -26);
    expect(actual).to.be.equal(false);
  });
  it('should return false if no shift is present', () => {
    const actual = caesar('hello');
    expect(actual).to.be.equal(false);
  });
});
