import fs from "fs";
import path from 'path';

export const secretEntrance1 = () => {
    const filePath = path.join(__dirname, '../inputs/Day1-input.txt');
    const data = fs.readFileSync(filePath, "utf-8");

    let currPos = 50;
    let pointerAtZeroCount = 0;

    for (const line of data.split("\n")) {
        const direction = line[0];
        const distance = Number(line.slice(1));

        if(direction === "L")
            currPos = currPos - distance >= 0 
                ? currPos - distance
                : (100 - Math.abs((currPos - distance)) % 100) % 100;
        else
            currPos = (currPos + distance) % 100;

        if (currPos === 0)
            pointerAtZeroCount++;
    }
    return pointerAtZeroCount;
}

export const secretEntrance2 = () => {
    const filePath = path.join(__dirname, '../inputs/Day1-input.txt');
    const data = fs.readFileSync(filePath, "utf-8");

    let currPos = 50;
    let pointerAtZeroCount = 0;

    for (const line of data.split("\n")) {
        const direction = line[0];
        const distance = Number(line.slice(1));
        
        const prevPos = currPos;
        let noHundredsDistance = distance % 100;
        let hundreds = (distance - noHundredsDistance) / 100;

        if(direction === "L") { 
            currPos = currPos - distance >= 0 
                ? currPos - distance
                : (100 - Math.abs((currPos - distance)) % 100) % 100;


            pointerAtZeroCount += hundreds;
            if(prevPos - noHundredsDistance <= 0 && prevPos != 0)   
                pointerAtZeroCount++;
        }
        else {
            currPos = (currPos + distance) % 100;

            pointerAtZeroCount += hundreds;
            if(currPos < prevPos)
                pointerAtZeroCount++;
        }
    }
    return pointerAtZeroCount;
}