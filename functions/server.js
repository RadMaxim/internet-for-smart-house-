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
const app = exp();
const PORT = 3001;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.post("/data/get", async (req, res) => {
  const data = req.body;
  console.log(data);
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
  // notion.getPage(process.env.NOTION_DATABASE_ID) // Получить страницу по ID
  //  .then(page => console.log(page))
  //  .catch(err => console.error(err));
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Data received successfully");
});
app.get("/test", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send("Hello");
});
app.listen(PORT);
