import { NextApiRequest, NextApiResponse } from "next";
import { promises } from "fs";
import path from "path";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file_data = await promises.readFile(
      path.join(process.cwd(), "/public/animation/apps-animation.json"),
      "utf8"
    );

    await NextCors(req, res, {
      origin: "*",
      methods: ["GET"],
      optionsSuccessStatus: 200,
    });

    const json_data = JSON.parse(file_data);

    res.status(200).json(json_data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error reading data" });
  }
}
