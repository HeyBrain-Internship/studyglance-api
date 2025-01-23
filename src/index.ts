import Fastify      from "fastify";
import cors         from "@fastify/cors";
import getSheetData from "./google/sheets/reading";
import * as dotenv from "dotenv"; dotenv.config();

const fastify = Fastify({ logger : true });

fastify.register(cors,
                 {
                     origin : "*"
                 })

fastify.get('/get', async (request, response) =>
{
    const data = await getSheetData();
    response.send({ status : "OK", receivedData : data });
})

void fastify.listen({ port : Number(process.env.PORT), host: "0.0.0.0" });
console.log("Listening");