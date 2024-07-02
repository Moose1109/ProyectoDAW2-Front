export class ItemVenta {
    item: number;
    codproducto: string;
    nomproducto: string;
    precio: number;
    cantidad: number;
    precioventa: number;

    constructor(item: number, codproducto: string, nomproducto: string, precio: number, cantidad: number, precioventa: number){
        this.item = item;
        this.codproducto = codproducto;
        this.nomproducto = nomproducto;
        this.precio = precio;
        this.cantidad = cantidad;
        this.precioventa = precioventa;
    }

    
    

  
}
