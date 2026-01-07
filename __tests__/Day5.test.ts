import { cafeteria, cafeteria2 } from "../solutions/Day5";

import fs from "fs"

let readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe("lobby tests", () => {
    beforeEach(() => {
        readFileSyncSpy.mockRestore();
    })

    describe("part one", () => {
        it('should return correct answer when input is taken from the example in the task description', () => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            const input = "3-5\n10-14\n16-20\n12-18\n\n1\n5\n8\n11\n17\n32\n"
            readFileSyncSpy.mockReturnValue(input);
            
            expect(cafeteria()).toBe(3);
        });

        it('should return actual solution to the puzzle', () => {
            expect(cafeteria()).toBe(775);
        });
    })

    describe("part two", () => {

        it.each([
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-14\n12-20\n",
                answer: 11
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-14\n8-12\n",
                answer: 7
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-20\n12-20\n",
                answer: 11
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-12\n12-20\n",
                answer: 11
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-14\n8-14\n",
                answer: 7
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-14\n8-10\n",
                answer: 7
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "12-20\n10-22\n",
                answer: 13
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-20\n10-22\n",
                answer: 13
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-22\n10-20\n",
                answer: 13
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "10-22\n12-22\n",
                answer: 13
            },
            {
                description: "should merge two ranges together and return correct answer",
                input: "12-22\n10-22\n",
                answer: 13
            },
            {
                description: "should return correct answer when input is taken from the example in the task description",
                input: "3-5\n10-14\n16-20\n12-18\n",
                answer: 14
            },
        ])('$description', ({input, answer}) => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            readFileSyncSpy.mockReturnValue(input);

            expect(cafeteria2()).toBe(answer);
        });

        it('should return actual solution to the puzzle', () => {
            // wrong answers
            // 336924750257726
            // 347427561690810
            // 345998029782927
            
            expect(cafeteria2()).toBe(345998029782927);
        });
    })
});