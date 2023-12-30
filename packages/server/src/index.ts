import cors from "cors";
import express from "express";

import { sharedFunction } from "../../shared/src/utils.js";

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "PATCH", "POST"],
};

app.use(cors(corsOptions));
app.use(express.json({ type: "application/json" }));

app.get("/", (req, res) => {
  sharedFunction();
  res.send("Express server working!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
