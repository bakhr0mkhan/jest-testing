const { requireTitleAndBody, belongsToUser } = require('../functions/post')
const { posts } = require('../dummy')

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