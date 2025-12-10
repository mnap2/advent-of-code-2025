import fs from "fs";
import path from 'path';

export const giftShop = () => {
    const filePath = path.join(__dirname, '../inputs/Day2-input.txt');
    const data = fs.readFileSync(filePath, "utf-8");

    let invalidIdsSum = 0;

    for (const idRange of data.split(",")) {
        const [firstIdStr, lastIdStr] = idRange.split("-");
        for(let id = Number(firstIdStr); id <= Number(lastIdStr); id++) {
            const idString = id.toString();
            const firstPart = idString.slice(0, idString.length / 2);
            const secondPart = idString.slice(idString.length / 2, idString.length);
            
            if(firstPart === secondPart)
                invalidIdsSum += id;
        }
    }
    return invalidIdsSum;
}

// export const giftShop2 = () => {
//     const filePath = path.join(__dirname, '../inputs/Day2-input.txt');
//     const data = fs.readFileSync(filePath, "utf-8");

//     let invalidIdsSum = 0
//     for (const idRange of data.split(",")) {
//         const [firstIdStr, lastIdStr] = idRange.split("-")
//         for(let id = Number(firstIdStr); id <= Number(lastIdStr); id++) {
//             const idString = id.toString()
//             const firstPart = idString.slice(0, idString.length / 2)
//             const secondPart = idString.slice(idString.length / 2, idString.length)
//             if(firstPart === secondPart)
//                 invalidIdsSum += id;
//         }
//     }
//     console.log(invalidIdsSum)
//     return invalidIdsSum
// }

// giftShop2()