import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import authRoute from "./router/mainRouter.js";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CORSORIGIN,
    credentials: true,
  })
);
export const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
app.get("/generate-presigned-url", async (req, res) => {
  try {
    const { fileName, category } = req.query;

    const fileType = req.query.fileType as string;
    const keypart = fileType.split("/")[0];

    if (!fileName || !fileType || !category) {
      res.status(400).json({ error: "Missing required query parameters" });
      return;
    }

    const Key = `${keypart}s/${category}/${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: Key,
      ContentType: fileType,
      // ACL: "public-read",
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 60 });

    res.json({ url });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.use("/api/v1", authRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
