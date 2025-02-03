import getSheetData   from "./basic/reading";
import writeSheetData from "./basic/writing";

async function updateAnswerStatistics(database : any[][], questionID : number, answerFlag : number)
{
    let databaseFiltered : number[] = database.map(row => row[0]);
    databaseFiltered = databaseFiltered.map(Number);

    const rowIndex = databaseFiltered.indexOf(questionID);
    const statCorrectAnswers = await getSheetData(`Data!W${rowIndex + 2}`);
    const statWrongAnswers   = await getSheetData(`Data!X${rowIndex + 2}`);

    if (answerFlag === 1 && statCorrectAnswers !== undefined && statCorrectAnswers !== null)
    {
        await writeSheetData(`Data!W${rowIndex + 2}`, [[Number(statCorrectAnswers[0][0]) + 1]]);
    }
    else
    {
        console.log("statCorrectAnswers === " + statCorrectAnswers);
    }

    if (answerFlag === 0 && statWrongAnswers !== undefined && statWrongAnswers !== null)
    {
        await writeSheetData(`Data!X${rowIndex + 2}`, [[Number(statWrongAnswers[0][0]) + 1]]);
    }
    else
    {
        console.log("statWrongAnswers === " + statWrongAnswers);
    }
}

export default updateAnswerStatistics;