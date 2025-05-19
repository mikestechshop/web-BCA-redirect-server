import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

// Add logging middleware
api.use((req, res, next) => {
  console.log("Function hit:", req.method, req.path);
  next();
});

// Middleware to redirect all traffic
api.use((req, res) => {
  console.log("Redirecting to goforpink");
  res.redirect(301, "https://breastcanceralliance.org/goforpink");
});

export const handler = serverless(api);
