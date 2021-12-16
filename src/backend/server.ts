import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import router from "./router";
import path from "path";

const app = express();
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api/version", router);

//クライアント
app.use(express.static(path.join(__dirname, "public")));

export default app.listen(port, () => {
  console.log("App is running at http://localhost:3000");
});
