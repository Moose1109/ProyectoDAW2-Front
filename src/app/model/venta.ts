import { Cliente } from "./cliente";

export interface  Venta {

    idventa: number;
    nroserie: string;
    idcliente: string;
    idempleado:string;
    monto:number;
    fecha:Date

    objCliente: Cliente;
   // objmpleado: Empleado;

}
