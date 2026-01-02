import fs from "fs";
import path from 'path';

export const printingDepartment = () => {
    const filePath = path.join(__dirname, "../inputs/Day4-input.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    
    const grid = data.split("\n").map((line: string) => line.split(''));
    const pairs = [[1,0], [1,1], [0,1], [-1,1], [-1,0], [-1,-1], [0, -1], [1,-1]];

    let accessibleRolls = 0;

    for (const rowIndex in grid) {
        for(const colIndex in grid[0]) {
            if(grid[rowIndex][colIndex] === "@") {
                let adjacentRolls = 0;
                let isAccessible = true;
                
                for(const pair of pairs) {
                    if( grid[Number(rowIndex)+pair[0]] &&
                        grid[Number(rowIndex)+pair[0]][Number(colIndex)+pair[1]] &&
                        grid[Number(rowIndex)+pair[0]][Number(colIndex)+pair[1]] == "@"
                    )
                        adjacentRolls++;

                    if(adjacentRolls == 4) {
                        isAccessible = false;
                        break;
                    }
                }

                if(isAccessible)
                    accessibleRolls++;
            }
        }
    }

    return accessibleRolls;
};

export const printingDepartment2 = () => {
    const filePath = path.join(__dirname, "../inputs/Day4-input.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    
    const grid = data.split("\n").map((line: string) => line.split(''));
    const pairs = [[1,0], [1,1], [0,1], [-1,1], [-1,0], [-1,-1], [0, -1], [1,-1]];

    let totalAccessibleRolls = 0;

    while(true) {
        let rollsToBeRemovedPositions = [];

        for (const rowIndex in grid) {
            for(const colIndex in grid[0]) {
                if(grid[rowIndex][colIndex] === "@") {
                    let adjacentRolls = 0;
                    let isRollAccessible = true;
                    
                    for(const pair of pairs) {
                        if( grid[Number(rowIndex)+pair[0]] &&
                            grid[Number(rowIndex)+pair[0]][Number(colIndex)+pair[1]] &&
                            grid[Number(rowIndex)+pair[0]][Number(colIndex)+pair[1]] == "@"
                        )
                            adjacentRolls++;

                        if(adjacentRolls == 4) {
                            isRollAccessible = false;
                            break;
                        }
                    }

                    if(isRollAccessible)
                        rollsToBeRemovedPositions.push([Number(rowIndex), Number(colIndex)]);
                }
            }
        }

        if(rollsToBeRemovedPositions.length === 0)
            return totalAccessibleRolls;

        for(const position of rollsToBeRemovedPositions)
            grid[position[0]][position[1]] = ".";

        totalAccessibleRolls += rollsToBeRemovedPositions.length ;  
    }
};