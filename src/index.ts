import Fastify      from "fastify";
import cors         from "@fastify/cors";
import getSheetData from "./google/sheets/reading";

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

void fastify.listen({ port : 8080 });
console.log("Listening on port 8080");