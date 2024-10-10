import { Request, Response, NextFunction } from 'express-serve-static-core';
import express from "express";

const app = express();

app.get("/api/posts", (request: Request, response: Response) => {
    response.json({ data: "Liste des posts" });
});

app.listen(3000);