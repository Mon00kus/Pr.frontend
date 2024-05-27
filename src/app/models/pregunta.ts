import { Respuesta } from "./respuesta";

export class Pregunta{
    descripcion : string;
    listRespuestas : Respuesta[];
    hide? : boolean;
    constructor(descrip : string,
        listRespuestas : Respuesta[]){
            this.descripcion = descrip;
            this.listRespuestas = listRespuestas;
            this.hide = true;
    }
}
