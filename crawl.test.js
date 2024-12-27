
const {normalizeURL} = require('./crawl.js')
const {test, expect} = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.ayush.ab/dev';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.ab/dev';
    expect(actual).toEqual(expected);
})

test('normalizeURL trailing slash', () => {
    const input = 'https://blog.ayush.ab/dev/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.ab/dev';
    expect(actual).toEqual(expected);
})

test('normalizeURL capitals', () => {
    const input = 'https://blog.AYUSH.ab/dev/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.ab/dev';
    expect(actual).toEqual(expected);  
})

test('normalizeURL strip http', () => {
    const input = 'http://blog.ayush.ab/dev/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.ab/dev';
    expect(actual).toEqual(expected);  
})

