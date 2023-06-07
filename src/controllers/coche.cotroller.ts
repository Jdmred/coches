import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/venta';
import { Cliente } from '../models/cliente';
import { Coche, CocheI } from '../models/coche';

export class CocheController{
        //metdo mostrar coches
    public async getAllCoche(req: Request, res:Response){
        try {
            const coche: CocheI[] = await Coche.findAll({
                include: [
                    {
                        model: Cliente,
                        as:'cliente',
                        attributes: ['nombre']
                    }
                ]
            }) // select * from clientes;
            res.status(200).json({coche})
        } catch (error) {

        }
    }
}