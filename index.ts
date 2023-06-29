import express from "express";
import { generateRandomString } from "lucia-auth";

const app = express();

app.get("/", (_, res) => {
  res.send(generateRandomString(8));
});

app.listen(8080, () => {
    console.log("Example app listening on port 8080")
});
