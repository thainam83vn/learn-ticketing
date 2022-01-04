import express from "express";
import { json } from "body-parser";
import { signup } from "./routes/signup";

const app = express();
app.use(json());
app.use(signup);

app.get("/api/users", (req, res) => {
  res.send("Healthy");
});

app.listen(3000, () => {
  console.log("Listen on 3000");
});
