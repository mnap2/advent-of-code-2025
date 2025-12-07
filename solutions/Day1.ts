import fs from "fs";
import path from 'path';

export const secretEntrance1 = () => {
    const filePath = path.join(__dirname, '../inputs/Day1-input.txt');
    const data = fs.readFileSync(filePath, "utf-8");

    let position = 50;
    let pointerAtZeroCount = 0;

    for (const line of data.split("\n")) {
        const direction = line[0];
        const distance = Number(line.slice(1));

        if(direction === "L")
            position = position - distance < 0 
                ? (100 - Math.abs((position - distance)) % 100) % 100
                : position - distance;
        else
            position = (position + distance) % 100;

        if (position === 0)
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
        
        let noHundredsDistance = distance % 100;
        let hundreds = (distance - noHundredsDistance) / 100;
        const posBeforeRotation = currPos;
        if(direction === "L") { 
            currPos = currPos - distance < 0 
                ? (100 - Math.abs((currPos - distance)) % 100) % 100
                : currPos - distance;


            pointerAtZeroCount += hundreds;
            if(posBeforeRotation - noHundredsDistance <= 0 && posBeforeRotation != 0)   
                pointerAtZeroCount++;
        }
        else {
            currPos = (currPos + distance) % 100;

            pointerAtZeroCount += hundreds;
            if(currPos < posBeforeRotation)
                pointerAtZeroCount++;
        }
    }
    return pointerAtZeroCount;
}