import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // const reqParams = req.query;
    // TODO: connect to Slack Web Hook
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error reading data" });
  }
}
