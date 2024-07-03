import { Categoria } from "./categoria";

export interface Producto {
  codproducto: string;
  nomproducto: string;
  idcategoria: number;
  precio: number;
  stock: number;
  estado: number;

  /*objCategoria: Categoria;*/

}
