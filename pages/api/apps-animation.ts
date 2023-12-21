import { NextApiRequest, NextApiResponse } from "next";
import { promises } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file_data = await promises.readFile(
      process.cwd() + "/public/static/animation/apps-animation.json",
      "utf8"
    );

    const json_data = JSON.parse(file_data);

    res.status(200).json(json_data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error reading data" });
  }
}
