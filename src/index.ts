import getSheetData from "./google/sheets/reading";
import Fastify        from "fastify";

const fastify = Fastify({ logger : true });


getSheetData().then(response => console.log(response));