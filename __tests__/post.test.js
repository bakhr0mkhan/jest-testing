const { requireTitleAndBody, belongsToUser } = require('../functions/post');
const { posts } = require('../dummy');
const axios = require('axios').default;

describe('belongsToUser()', () => {
    test("belongsToUser() should return false if no valid args passed", () => {
        const result = belongsToUser();
        expect(result).toBe(false);
    })
    test("belongsToUser() should return false if ids' don't match", () => {
        const result = belongsToUser(2, posts[0]);
        expect(result).toBe(false);
    })
    test("belongsToUser() should return true in perfect scenario", () => {
        const post = posts[0];
        const result = belongsToUser(1, post);
        expect(result).toBe(true);
    })
});

describe("requireTitleAndBody()", () => {
    test("requireTitleAndBody() should return false if no valid args passed", () => {
        const result = requireTitleAndBody();
        expect(result).toBe(false);
    });
    test("requireTitleAndBody() should return false if no title or body", () => {
        const result = requireTitleAndBody({ title: "test" });
        expect(result).toBe(false);
    });
    test("requireTitleAndBody() should return true in perfect scenario", () => {
        const post = posts[0];
        const result = requireTitleAndBody(post);
        expect(result).toBe(true);
    });
});

describe('Posts from backend', () => {
    test('response status is 200', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { status } = response;
        expect(status).toBe(200);
    });
    test('should fetch at least a post', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { data } = response;
        expect(data.length).toBeGreaterThan(0);
    });
})