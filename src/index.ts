import * as dotenv            from "dotenv";
import Fastify                from "fastify";
import cors                   from "@fastify/cors";
import databaseImport         from "./google/sheets/database-import";
import updateAnswerStatistics from "./google/sheets/answer-statistics";

let database : any[][];

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
    const { data, filteredData } = await databaseImport(grade) ?? {};

    database = data ?? [];
    console.log(database.length);

    response.send({ status : "OK", receivedData : filteredData });
})

fastify.get<
    {
        Params :
            {
                questionID : string, answerFlag : string
            }
    }
>('/answer/:questionID-:answerFlag',
  async (request) =>
  {
      const questionID = Number(request.params.questionID);
      const answerFlag = Number(request.params.answerFlag);
      await updateAnswerStatistics(database,
                                   questionID,
                                   answerFlag);
  })

void fastify.listen({ port : Number(process.env.PORT), host : "0.0.0.0" });
console.log("Listening");