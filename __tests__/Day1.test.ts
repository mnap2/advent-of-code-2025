import { secretEntrance1, secretEntrance2 } from "../solutions/Day1-part1";
import fs from "fs"

let readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe("secretEntrance tests", () => {
    beforeEach(() => {
        readFileSyncSpy.mockRestore()
    })

    describe("part one", () => {
        it('should return actual solution to the puzzle', () => {
            expect(secretEntrance1()).toBe(997);
        })

        it.each([
            {
                description: "should return correct answer when input is from task description",
                input: "L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82",
                answer: 3
            },
            {
                description: "should return correct answer when input has last line empty",
                input: "L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82\n",
                answer: 3
            },
            {
                description: "should return correct answer given my example input",
                input: "L25\nL25\nL861\nR61\nR1000\nR49\nR51",
                answer: 4
            },
        ])('$description', ({input, answer}) => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            readFileSyncSpy.mockReturnValue(input)
            expect(secretEntrance1()).toBe(answer);
            expect(readFileSyncSpy).toHaveBeenCalled()
            readFileSyncSpy.mockRestore()
        });
    })

    describe("part two", () => {
        it('should return actual solution to the puzzle', () => {
            expect(secretEntrance2()).toBe(5978);
        })

        it.each([
            {
                description: "should return correct answer when input is from task description",
                input: "L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82",
                answer: 6
            },
            {
                description: "should return correct answer when input has last line empty",
                input: "L68\nL30\nR48\nL5\nR60\nL55\nL1\nL99\nR14\nL82\n",
                answer: 6
            },
            {
                description: "should return correct answer given my example input",
                input: "L25\nL25\nL861\nR61\nR1000\nR49\nR51",
                answer: 21
            },
            {
                description: "should return correct answer - left rotation test 1",
                input: "L150",
                answer: 2
            },
            {
                description: "should return correct answer - left rotation test 2",
                input: "L151",
                answer: 2
            },
        ])('$description', ({input, answer}) => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            readFileSyncSpy.mockReturnValue(input)
            expect(secretEntrance2()).toBe(answer);
            expect(readFileSyncSpy).toHaveBeenCalled()
        });
    })
    
});