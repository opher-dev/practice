import express from "express";
import { lessons } from "./data";
import cors from "cors";
const app = express();
const port = 4377;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.get("/", (req, resp) => {
  resp.status(200).send({ message: "Voilor!", lessons});
});
app.listen(port, () => {
  console.log("Server running on port http://localhost:4377");
});
