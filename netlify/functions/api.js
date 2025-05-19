import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
api.use((req, res) => {
  res.redirect(301, "https://breastcanceralliance.org/goforpink");
});

export const handler = serverless(api);
