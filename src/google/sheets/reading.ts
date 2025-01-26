import * as dotenv  from "dotenv";
import authenticate from "../authentication";

dotenv.config();

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

async function getSheetData(grade : string)
{
    let selectedGrade : string;

    //@formatter:off
    switch (grade)
    {
        case "grade-kindergarten": selectedGrade = "Kindergarten"; break;
        case "grade-1": selectedGrade = "1"; break;
        case "grade-2": selectedGrade = "2"; break;
        case "grade-3": selectedGrade = "3"; break;
        case "grade-4": selectedGrade = "4"; break;
        case "grade-5": selectedGrade = "5"; break;
        case "grade-6": selectedGrade = "6"; break;
        case "grade-7": selectedGrade = "7"; break;
        case "grade-8": selectedGrade = "8"; break;
    }
    //@formatter:on

    try
    {
        const sheetClient = await authenticate();

        const response = await sheetClient?.spreadsheets.values.get({
                                                                        spreadsheetId : SPREADSHEET_ID,
                                                                        range :         "Data!A2:S"
                                                                    });

        // @ts-ignore
        const data = response.data.values;

        data!.forEach((row) =>
        {
            row.splice(10, 3);
            row.splice(7, 2);
            row.splice(3, 3);
        })

        return data!.filter((columns) => columns[1] === selectedGrade);
    }
    catch (error)
    {
        console.error("Google Sheet error:   " + error);
    }
}

export default getSheetData;