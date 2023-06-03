import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Venta, VentaI } from '../models/venta';
import { Cliente } from '../models/cliente';

export class VentaController{
        //metdo mostrar ventas
    public async getAllVenta(req: Request, res:Response){
        try {
            const venta: VentaI[] = await Venta.findAll({
                include: [
                    {
                        model: Cliente,
                        as:'cliente',
                        attributes: ['nombre']
                    }
                ]
            }) // select * from clientes;
            res.status(200).json({venta})
        } catch (error) {

        }
    }
}