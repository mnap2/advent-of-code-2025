import fs from "fs";
import path from 'path';

export const cafeteria = () => {
    const filePath = path.join(__dirname, "../inputs/Day5-input.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const [idRangesStr, idsStr] = data.split("\n\n");
    
    const idRangesPairs = idRangesStr.split("\n").map((range: string) => range.split("-"));
    const ids = idsStr.split("\n");

    return ids.filter((id) => 
        idRangesPairs.some((pair) => 
            Number(pair[0]) <= Number(id) && Number(pair[1]) >= Number(id)
        )
    ).length;
};

export const cafeteria2 = () => {
    const filePath = path.join(__dirname, "../inputs/Day5-input.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    const [idRangesStr, _idsStr] = data.split("\n\n");

    const idRangesPairs = idRangesStr
        .split("\n")
        .map((range: string) => 
            range.split("-").map((num) => Number(num))
        )
        .filter(pair => pair.length === 2);

    let oldRanges: number[][];
    let newRanges;

    do {
        oldRanges = newRanges ? newRanges : idRangesPairs;
        newRanges = [];
        let isPartOfNewRanges = oldRanges.map(() => false);

        for(const [index, currentRange] of oldRanges.entries()) {
            let currentMergedRange = currentRange;
            let isPartOfAnotherMerge = isPartOfNewRanges[index];
            
            if(!isPartOfAnotherMerge) {
                for(const [toMergeWithIndex, toMergeWithRange] of oldRanges.entries()) {
                    if(toMergeWithIndex <= index || isPartOfNewRanges[toMergeWithIndex]) continue;
                    
                    if(toMergeWithRange[0] <= currentRange[0] && toMergeWithRange[1] >= currentRange[1]) {
                        currentMergedRange = toMergeWithRange;
                        isPartOfNewRanges[toMergeWithIndex] = true;
                    } else if(toMergeWithRange[0] >= currentRange[0] && toMergeWithRange[1] <= currentRange[1]) {
                        currentMergedRange = currentRange;
                        isPartOfNewRanges[toMergeWithIndex] = true;
                    } else if(
                        toMergeWithRange[0] <= currentRange[0] &&
                        toMergeWithRange[1] >= currentRange[0] &&
                        toMergeWithRange[1] <= currentRange[1]
                    ) {
                        currentMergedRange = [toMergeWithRange[0], currentRange[1]];
                        isPartOfNewRanges[toMergeWithIndex] = true;
                    } else if(
                        toMergeWithRange[0] >= currentRange[0] &&
                        toMergeWithRange[0] <= currentRange[1] &&
                        toMergeWithRange[1] >= currentRange[1]
                    ) {
                        currentMergedRange = [currentRange[0], toMergeWithRange[1]];
                        isPartOfNewRanges[toMergeWithIndex] = true;
                    }
                }
                newRanges.push(currentMergedRange);
                isPartOfNewRanges[index] = true;
            }
        }

    } while(newRanges.length !== oldRanges.length);

    const freshIdsCount = oldRanges.reduce(
        (accumulator, range) => accumulator + range[1] - range[0] + 1,
        0
    );

    return freshIdsCount;
};