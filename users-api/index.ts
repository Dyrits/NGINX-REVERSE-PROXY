import { Request, Response, NextFunction } from 'express-serve-static-core';
import express from "express";

const app = express();
app.use(express.json());

app.get("/api/users", (request: Request, response: Response) => {
    response.json({ data: "Liste des utilisateurs" });
});

app.get("/api/users/:id", (request: Request, response: Response) => {
    response.json({ data: `Utilisateur ${request.params.id}`});
});

app.post("/api/users", (request: Request, response: Response) => {
    response.status(201).json({ data: `Utilisateur créé avec ${JSON.stringify(request.body)}`});
});

app.listen(3000);