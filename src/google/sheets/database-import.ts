import * as dotenv  from "dotenv";
import getSheetData from "./basic/reading";

dotenv.config();

async function databaseImport(grade : string)
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
        default: selectedGrade = ""; break;
    }
    //@formatter:on

    try
    {
        const data = await getSheetData("Data!A2:S");

        data?.forEach((row) =>
        {
            row.splice(10, 3);
            row.splice(7, 2);
            row.splice(3, 3);
        })

        const filteredData = data?.filter((columns) => columns[1] === selectedGrade);
        return { data : data, filteredData : filteredData };
    }
    catch (error)
    {
        console.error("Google Sheet error:   " + error);
    }
}

export default databaseImport;