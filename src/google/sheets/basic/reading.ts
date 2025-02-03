import * as dotenv  from "dotenv";
import authenticate from "../../authentication";

dotenv.config();

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

async function getSheetData (range : string)
{
    try
    {
        const sheetClient = await authenticate();
        const response = await sheetClient?.spreadsheets.values.get({
                                                                        spreadsheetId : SPREADSHEET_ID,
                                                                        range :         range
                                                                    });
        return response?.data.values;
    }
    catch (error)
    {
        console.error("Google Sheet error [reading]:   " + error);
    }
}

export default getSheetData;