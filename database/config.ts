import mongoose from "mongoose";

export const conectarDB = async (): Promise<void> => {

    try {
        await mongoose.connect("mongodb+srv://franvalero:la3117@apigastos.9ph3pew.mongodb.net/");
        console.log("Base de datos online");
    } catch (error) {
        console.log(error);
        throw new Error("Error a la hora de inicializar la base de datos");
    }

}