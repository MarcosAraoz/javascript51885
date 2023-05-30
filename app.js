
let producto = parseInt (prompt("Selecciona el producto que deseas comprar 1.Buzo - 2.Remera - 3.Campera"))

let seguirComprando = true
let decision
const carritos = []
let totalCompra = 0


function Producto(id, nombre, precio ) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
}
const buzo = new Producto(1, "Buzo", 80)
const remera = new Producto(2, "Remera", 20)
const campera = new Producto(3, "Campera", 100 )

while (seguirComprando === true) {
    if (producto === 1){
        totalCompra = totalCompra + buzo.precio
        carritos.push(buzo.nombre + " " + buzo.precio)
    } else if (producto === 2){
        totalCompra = totalCompra + remera.precio
        carritos.push(remera.nombre + " " + remera.precio)
    } else if (producto === 3){
        totalCompra = totalCompra + campera.precio
        carritos.push(campera.nombre + " " + campera.precio)
    } else {
        producto = parseInt(prompt("Selecciona un producto habilitado 1.Buzo - 2.Remera - 3.Campera"))
        continue
    }

   decision = parseInt (prompt("Quieres seguir comprando? 1.Si - 2.No"))
   if (decision === 1){
    producto = parseInt(prompt("Selecciona el producto que deseas comprar 1.Buzo - 2.Remera - 3.Campera"))
   } else {
    seguirComprando = false
   }
}
carritos.map((a, i)=>{
    console.log(i, a);
})

alert(`El total de tu compra es ${totalCompra} dolares`)
console.log(carritos);



