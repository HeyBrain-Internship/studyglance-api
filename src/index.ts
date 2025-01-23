import Fastify      from "fastify";
import cors         from "@fastify/cors";
import getSheetData from "./google/sheets/reading";

const fastify = Fastify({ logger : true });

fastify.register(cors,
                 {
                     origin : "*"
                 })

fastify.get('/', (request, response) =>
{
    const body = request.body;
    console.log(body);
    response.send({ status : "OK", receivedData : body });
})

const startServer = async () =>
{
    try
    {
        await fastify.listen({ port : 8080 });
        console.log("Listening on port 8080");
    }
    catch (error)
    {
        console.error(error);
        process.exit(1);
    }
}

startServer().then(response => console.log(response));

fastify.register(getSheetData, { suffix : "/get"});