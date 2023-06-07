import { Request, Response, Application, Router } from "express";

import {    CocheController } from "../controllers/coche.cotroller";

export class CocheRoutes{
    public cocheController: CocheController =  new CocheController();

    public routes(app: Application): void {
        app.route("/coches").get(this.cocheController.getAllCoche)
    }
}