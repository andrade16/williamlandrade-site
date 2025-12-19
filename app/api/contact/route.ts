// This file will handle POST requests to /api/contact
import { NextApiResponse } from "next";
import { Resend } from "resend";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Method not accepted" });
  const { status, data } = await postGeolocalityAddress(req);
  return res.status(status).json(data);
}
