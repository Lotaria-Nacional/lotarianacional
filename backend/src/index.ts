import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import routes from "./main/routes/index";
import { env } from "./main/config/env";
import { logger } from "./main/config/logger";
import { _ } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

dotenv.config();

const app = express();

logger.info(env.NODE_ENV);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Infra", "http", "views"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors({ origin: "*" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(env.PORT, () => {
  logger.info("Server running on port: " + env.PORT);
});