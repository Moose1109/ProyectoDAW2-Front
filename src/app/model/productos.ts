import { Categoria } from "./categoria";

export interface Productos {
 codproducto : string;
 nomproducto : string;
 idcategoria : number;
 precio : number; 
 stock: number;
 estado : number;

 objCategoria : Categoria;
}
