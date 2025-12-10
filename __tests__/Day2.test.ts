import { giftShop, giftShop2 } from "../solutions/Day2";

describe("giftShop tests", () => {
    describe("part one", () => {
        it('should return actual solution to the puzzle', () => {
            expect(giftShop()).toBe(38310256125);
        });
    })

    describe("part two", () => {
        it('should return actual solution to the puzzle', () => {
            expect(giftShop2()).toBe(58961152806);
        });
    })
});