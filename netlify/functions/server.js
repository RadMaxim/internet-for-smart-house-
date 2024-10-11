import { Client } from "@notionhq/client";
import dotenv from "dotenv";
dotenv.config();

const secret = "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";
const id_base = "119410ef61eb80d6a0d7ccdeace4ee7a";

const notion = new Client({
  auth: secret,
});

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
