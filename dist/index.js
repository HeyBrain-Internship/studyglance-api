"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Fastify        from "fastify";
const reading_1 = __importDefault(require("./google/sheets/reading"));
// const SCOPES               = "https://www.googleapis.com/auth/spreadsheets.readonly";
// const CLIENT_EMAIL         = "studyglance@studyglance.iam.gserviceaccount.com";
// const CLIENT_ID            = "137121920497-fo0e7slilsv7dl313gvgf21apejc8dc2.apps.googleusercontent.com";
// const PRIVATE_KEY          = serviceAccount.private_key;
// const fastify = Fastify({ logger : true });
(0, reading_1.default)().then(response => console.log(response));
