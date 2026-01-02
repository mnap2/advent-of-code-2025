import { printingDepartment, printingDepartment2 } from "../solutions/Day4";

import fs from "fs"

let readFileSyncSpy = jest.spyOn(fs, 'readFileSync');

describe("lobby tests", () => {
    beforeEach(() => {
        readFileSyncSpy.mockRestore();
    })

    describe("part one", () => {
        it('should return correct answer when input is taken from the example in the task description', () => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            const input = "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@."
            readFileSyncSpy.mockReturnValue(input);
            
            expect(printingDepartment()).toBe(13);
        });

        it('should return actual solution to the puzzle', () => {
            expect(printingDepartment()).toBe(1372);
        });
    })

    describe("part two", () => {
        it('should return correct answer when input is taken from the example in the task description', () => {
            readFileSyncSpy = jest.spyOn(fs, 'readFileSync');
            const input = "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@."
            readFileSyncSpy.mockReturnValue(input);
            
            expect(printingDepartment2()).toBe(43);
        });

        it('should return actual solution to the puzzle', () => {
            expect(printingDepartment2()).toBe(7922);
        });
    })
});