import exp from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const secret =
  process.env.SECRET_NOTION ||
  "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";
const id_base =
  process.env.NOTION_DATABASE_ID || "119410ef61eb80d6a0d7ccdeace4ee7a";

const notion = new Client({
  auth: secret,
});
// const app = exp();
// const PORT = 3001;
// const corsOptions = {
//   origin: "https://smarthouseeee.netlify.app",
//   methods: "GET, POST, PUT, DELETE",
//   allowedHeaders: "Content-Type",
//   credentials: true,
// };
// console.log("Server is start....");
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.post("/data/get", async (req, res) => {
//   console.log("data");

//   const data = req.body;
//   console.log(data);
//   await notion.pages.create({
//     parent: { database_id: id_base },
//     properties: {
//       full_name: {
//         title: [
//           {
//             text: {
//               content: data.Full_Name,
//             },
//           },
//         ],
//       },
//       email: {
//         rich_text: [
//           {
//             text: {
//               content: data.Email,
//             },
//           },
//         ],
//       },
//       message: {
//         rich_text: [
//           {
//             text: {
//               content: data.textArea,
//             },
//           },
//         ],
//       },
//     },
//   });

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.send("Data received successfully");
// });
// app.get("/test", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.send("Hello");
// });
// app.listen(PORT);
// netlify/functions/data-get.js

// const { Client } = require("@notionhq/client");
// require('dotenv').config();

// const secret = process.env.SECRET_NOTION;
// const id_base = process.env.NOTION_DATABASE_ID;

// const notion = new Client({
//   auth: secret,
// });

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("Received data:", data);

    await notion.pages.create({
      parent: { database_id: id_base },
      properties: {
        full_name: {
          title: [
            {
              text: {
                content: data.Full_Name,
              },
            },
          ],
        },
        email: {
          rich_text: [
            {
              text: {
                content: data.Email,
              },
            },
          ],
        },
        message: {
          rich_text: [
            {
              text: {
                content: data.textArea,
              },
            },
          ],
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received successfully" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error creating Notion page:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
