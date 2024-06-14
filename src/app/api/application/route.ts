// pages/api/proxy.ts
import { NextApiRequest, NextApiResponse } from "next";
import http from "http";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const options = {
      hostname: "102.223.10.124",
      port: 24401,
      path: "/ikmis-crop-management-service/api/v1/nane-nane",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const proxyReq = http.request(options, (proxyRes) => {
      let data = "";

      proxyRes.on("data", (chunk) => {
        data += chunk;
      });

      proxyRes.on("end", () => {
        res.status(proxyRes.statusCode || 200).json(JSON.parse(data));
      });
    });

    proxyReq.on("error", (e) => {
      console.error(`Problem with request: ${e.message}`);
      res.status(500).json({ message: "Internal server error" });
    });

    proxyReq.write(JSON.stringify(req.body));
    proxyReq.end();
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
};

export default handler;
