import { google } from "googleapis";

async function authenticate()
{

    try
    {
        const authentication = new google.auth.GoogleAuth(
            {
                credentials :
                    {
                        client_email : process.env.GOOGLE_CLIENT_EMAIL,
                        private_key :  process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n")
                    },
                scopes : ["https://www.googleapis.com/auth/spreadsheets.readonly"]
            });


        const authenticatedClient = await authentication.getClient();

        // @ts-ignore
        return google.sheets({ version : 'v4', auth : authenticatedClient });
    }
    catch (error)
    {
        console.log("Google Authentication/Sheets error:   " + error);
    }
}

export default authenticate;