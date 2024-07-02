import { Producto } from "./producto";
import { Venta } from "./venta";

export class DetalleVenta {

    iddetalleventa: number;
    idventas: number;
    codproduccion: string;
    cantidad: number;
    precioventa: number;

    objVenta: Venta;
    objProducto: Producto;

}
