import type { VercelApiHandler } from "@vercel/node";

const handler: VercelApiHandler = (req, res) => {
  res.send("OK");
};

export default handler;
