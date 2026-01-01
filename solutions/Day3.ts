import fs from "fs";
import path from 'path';

export const Lobby = () => {
    const filePath = path.join(__dirname, "../inputs/Day3-input.txt");
    const data = fs.readFileSync(filePath, "utf-8");
    let totalMaxJoltage = 0;

    for(const bank of data.split("\n")) {
        const bankIntArray = bank.split("").map((value: string) => Number(value));

        if(bankIntArray.length !== 0) {
            const firstBatteryVal = Math.max(...bankIntArray.slice(0, -1));
            const firstBatteryIndex = bankIntArray.indexOf(firstBatteryVal);

            const secondBatteryVal = Math.max(...bankIntArray.slice(firstBatteryIndex+1));

            const maxBankJoltage = 10 * firstBatteryVal + secondBatteryVal;
            
            totalMaxJoltage += maxBankJoltage;
        }
    }

    return totalMaxJoltage;
};