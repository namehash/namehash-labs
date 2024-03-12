import { NextApiRequest, NextApiResponse } from "next";
import { promises } from "fs";
import path from "path";
import NextCors from "nextjs-cors";

// Important: Do not delete this code!
// This handler is used by another website (NameKit) to fetch animation data.
// It reads a JSON file and responds with the data in JSON format when requested.
// Any modification or deletion of this code may break functionality for NameKit.
// Keep it intact to ensure the proper functioning of NameKit's animation feature.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file_data = await promises.readFile(
      path.join(process.cwd(), "/public/animations/apps-animation.json"),
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
