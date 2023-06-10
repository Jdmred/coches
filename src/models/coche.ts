import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Venta } from "./venta";

export class Coche extends Model{
    public codigo_M!: string;
    public modelo!: string;
    public color!: string;
    public pvc!: string;
    
}

export interface CocheI{
    codigo_M:string;
    modelo:string;
    color:string;
    pvc:string;
}

Coche.init(
    {
        codigo_M:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        modelo:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        color:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        pvc:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
       
        
    },
    {
        tableName: "coches",
        sequelize: database,
        timestamps: true
    }

);

// Asociación la tabla cliente con la tabla venta
Coche.belongsTo(Venta, { foreignKey: "ventaId", as: 'venta'}); // Agrega una columna ventaId en la tabla coches
// agregamos la relacion inversa de uno a muchos
Venta.hasMany(Coche, { foreignKey: "ventaId" }); // Agrega una columna ventaId en la tabla ventas