import { google } from "googleapis";

const SERVICE_ACCOUNT_FILE = "./src/google/studyglance-service.json";

async function authenticate()
{
    const authentication = new google.auth.GoogleAuth({
                                                          credentials :
                                                                   {
                                                                       client_email : process.env.GOOGLE_CLIENT_EMAIL,
                                                                       private_key :  process.env.GOOGLE_PRIVATE_KEY
                                                                   },
                                                          scopes : ["https://www.googleapis.com/auth/spreadsheets.readonly"]
                                                      });

    const authenticatedClient = await authentication.getClient();
    // @ts-ignore
    return google.sheets({ version : 'v4', auth : authenticatedClient });
}

export default authenticate;