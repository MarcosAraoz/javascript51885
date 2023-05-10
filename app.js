
let producto = parseInt (prompt("Selecciona el producto que deseas comprar 1.Iphone - 2.Tv - 3.Notebook"))

let totalCompra = 0 
let seguirComprando = true
let decision

while (seguirComprando === true) {
    if (producto === 1){
        totalCompra = totalCompra + 500
    } else if (producto === 2){
        totalCompra = totalCompra + 1000
    } else if (producto === 3){
        totalCompra = totalCompra + 800
    } else {
        producto = parseInt(prompt("Selecciona un producto habilitado 1.Iphone - 2.Tv - 3.Notebook"))
        continue
    }

   decision = parseInt (prompt("Quieres seguir comprando? 1.Si - 2.No"))
   if (decision === 1){
    producto = parseInt(prompt("Selecciona el producto que deseas comprar 1.Iphone - 2.Tv - 3.Notebook"))
   } else {
    seguirComprando = false
   }
}
alert(`El total de tu compra es ${totalCompra} dolares`)