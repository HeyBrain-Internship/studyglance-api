"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const SERVICE_ACCOUNT_FILE = "./src/google/studyglance-service.json";
function authenticate() {
    return __awaiter(this, void 0, void 0, function* () {
        const authentication = new googleapis_1.google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
        });
        const authenticatedClient = yield authentication.getClient();
        // @ts-ignore
        return googleapis_1.google.sheets({ version: 'v4', auth: authenticatedClient });
    });
}
exports.default = authenticate;
