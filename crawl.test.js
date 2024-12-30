
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://blog.ayush.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.dev/path';
    expect(actual).toEqual(expected);
})

test('normalizeURL trailing slash', () => {
    const input = 'https://blog.ayush.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.dev/path';
    expect(actual).toEqual(expected);
})

test('normalizeURL capitals', () => {
    const input = 'https://blog.AYUSH.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.dev/path';
    expect(actual).toEqual(expected);
})

test('normalizeURL strip http', () => {
    const input = 'http://blog.ayush.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.ayush.dev/path';
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.ayush.dev/path/">
                Ayush.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.ayush.dev/path/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.ayush.dev/path/"];
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML relative', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="/path/">
                Ayush.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.ayush.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.ayush.dev/path/"];
    expect(actual).toEqual(expected);
})

test('getURLsFromHTML both', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://blog.ayush.dev/path1/">
                Ayush.dev Blog
            </a>
            <a href="/path2/">
                Ayush.dev Blog
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.ayush.dev"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://blog.ayush.dev/path1/", "https://blog.ayush.dev/path2/"];
    expect(actual).toEqual(expected);
})