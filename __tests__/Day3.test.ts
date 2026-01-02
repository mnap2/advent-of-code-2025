import { Lobby, Lobby2 } from "../solutions/Day3";
import fs from "fs"

let readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe("lobby tests", () => {
    beforeEach(() => {
        readFileSyncSpy.mockRestore()
    })

    describe("part one", () => {
        it('should return actual solution to the puzzle', () => {
            expect(Lobby()).toBe(17193);
        });
    })

    describe("part two", () => {
        it.each([
            {
                description: "should return correct answer when input is 234234234234278",
                input: "234234234234278\n",
                answer: 434234234278
            },
            {
                description: "should return correct answer when input is taken from the example in the task description",
                input: "987654321111111\n811111111111119\n234234234234278\n818181911112111\n",
                answer: 3121910778619
            }
        ])('$description', ({input, answer}) => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            readFileSyncSpy.mockReturnValue(input)

            expect(Lobby2()).toBe(answer);
        });

        it('should return actual solution to the puzzle', () => {
            expect(Lobby2()).toBe(171297349921310);
        });
    })
});