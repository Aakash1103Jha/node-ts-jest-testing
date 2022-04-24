import { Router, Request, Response } from "express";

const RootRoute = Router();

RootRoute.get("/", async (req: Request, res: Response) => {
    return res.status(200).json("Welcome");
});
RootRoute.post("/", async (req: Request, res: Response) => {
    if (!req.body.name) return res.status(400).json("No data");
    const data = { name: req.body.name };
    return res.status(200).json(data);
});

export default RootRoute;
