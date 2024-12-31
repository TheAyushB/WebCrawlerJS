const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sort pages', () => {
    const input = {
        'https://theayushb.dev/path': 1,
        'https://theayushb.dev': 3
    }
    const actual = sortPages(input);
    const expected = [
        ['https://theayushb.dev', 3],
        ['https://theayushb.dev/path', 1],

    ];
    expect(actual).toEqual(expected);
})

test('sort 6 pages', () => {
    const input = {
        'https://theayushb.dev/path': 1,
        'https://theayushb.dev': 3,
        'https://theayushb.dev/path1': 5,
        'https://theayushb.dev/path2': 2,
        'https://theayushb.dev/path3': 8,
        'https://theayushb.dev/path4': 4
    }
    const actual = sortPages(input);
    const expected = [
        ['https://theayushb.dev/path3', 8],
        ['https://theayushb.dev/path1', 5],
        ['https://theayushb.dev/path4', 4],
        ['https://theayushb.dev', 3],
        ['https://theayushb.dev/path2', 2],
        ['https://theayushb.dev/path', 1],

    ];
    expect(actual).toEqual(expected);
})