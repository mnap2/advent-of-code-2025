import { giftShop } from "../solutions/Day2";
import fs from "fs"

// let readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe("giftShop tests", () => {
    // beforeEach(() => {
    //     readFileSyncSpy.mockRestore()
    // })

    describe("part one", () => {
        it('should return actual solution to the puzzle', () => {
            expect(giftShop()).toBe(38310256125);
        });
    })
});