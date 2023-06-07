import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

import { Venta } from "./venta";
import { Cliente } from "./cliente";

export class Coche extends Model {
    public modelo!: string;
    public color!: string;
    public pvc!: number; 
}

export interface CocheI{
    modelo: string;
    color: string;
    pvc: number;
}

Venta.init(
    {
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pvc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
       // modeloId: {
           // type: DataTypes.INTEGER,
            //allowNull: false
            //refereces:{
              //  model: Marca,
              //  key:'id',
           // }
            
        //},
        //clienteId: {
          //  type: DataTypes.INTEGER,
            //allowNull: false,
            //references: {
              //  model: Cliente,
               // key: 'id',
            //}
        //}
    },
    {
        tableName: "coches",
        sequelize: database,
        timestamps: true 
    }
);
