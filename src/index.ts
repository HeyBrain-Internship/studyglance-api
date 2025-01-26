import Fastify      from "fastify";
import cors         from "@fastify/cors";
import getSheetData from "./google/sheets/reading";
import * as dotenv  from "dotenv";

dotenv.config();

const fastify = Fastify({ logger : true });

fastify.register(cors,
                 {
                     origin : "*"
                 })

fastify.get<{ Params : { grade : string } }>('/get-:grade', async (request, response) =>
{
    const { grade } = request.params;
    console.log(grade);
    const data      = await getSheetData(grade);
    response.send({ status : "OK", receivedData : data });
})

void fastify.listen({ port : Number(process.env.PORT), host : "0.0.0.0" });
console.log("Listening");