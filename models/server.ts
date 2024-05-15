import express, { Express } from "express";

import gastoRoutes from "../routes/gastos";
import { conectarDB } from "../database/config";

export class Server {

    //definimos app al no ser de un type comun le asignamos Express porque es una app de express
    app:Express;

    constructor() {
        this.app=express();
        this.conexionaDB();
        this.middlewares();
        this.routes();

    }


    //funciones
        //el promise<void> se utiliza para realizar una promesa vacia al conectar el db
    async conexionaDB():Promise<void> {
        await conectarDB();
    }

    middlewares() :void {
        this.app.use(express.json())
    }

    routes():void {
        this.app.use("/gastos", gastoRoutes);
    }

    //activamos el servidor
    listen():void {
        this.app.listen(8081, ()=> {
            console.log("Servidor iniciado en puerto 8081")
        })
    }
}