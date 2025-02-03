import * as dotenv  from "dotenv";
import authenticate from "../../authentication";

dotenv.config();

const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

async function writeSheetData(range : string, values : any[][])
{
    try
    {
        const sheetClient = await authenticate();

        await sheetClient?.spreadsheets.values.update({
                                                          spreadsheetId :    SPREADSHEET_ID,
                                                          range :            range,
                                                          valueInputOption : "USER_ENTERED",
                                                          requestBody :      { values }
                                                      });
    }
    catch
        (error)
    {
        console.error("Google Sheet error [writing]:   " + error);
    }
}

export default writeSheetData;