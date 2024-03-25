import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const filePath = path.resolve("./public", "data.csv");
    const { data } = req.body;
    const newLine = data.join(",") + "\n";

    fs.appendFile(filePath, newLine, (err) => {
      if (err) {
        console.error("Failed to append data", err);
        res.status(500).json({ message: "Failed to save data" });
      } else {
        res.status(200).json({ message: "Data added successfully" });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
