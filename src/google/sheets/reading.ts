import * as dotenv from "dotenv"; dotenv.config();
import authenticate from "../authentication";

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

async function getSheetData()
{
    try
    {
        const sheetClient = await authenticate();
        const response    = await sheetClient?.spreadsheets.values.get({
                                                                          spreadsheetId : SPREADSHEET_ID,
                                                                          range :         "Data!A1:D5"
                                                                      });
        console.log("Google Sheet response:   " + response?.data.values);
        return response?.data.values;
    }
    catch (error)
    {
        console.error("Google Sheet error:   " + error);
    }
}

export default getSheetData;