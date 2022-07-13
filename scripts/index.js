const suma = (a, b) => a + b;
let flag = true;

while (flag) {
    var ingresarPrecio = precio();
    if (!isNaN(ingresarPrecio) && ingresarPrecio != "" && ingresarPrecio != null) {
        alert(`Ingresaste: $${ingresarPrecio} ahora selecciona la cantidad de cuotas con las que quiera pagar`);
        break;
    } else {
        alert("No ingresaste un numero");
        continue;
    }
}

let elegirCuotas;
while (elegirCuotas != 1 && elegirCuotas != 3 && elegirCuotas != 6) {
    elegirCuotas = parseInt(prompt("Puede pagar el producto en 1 pago o en 3 o 6 cuotas. (se le sumara un recargo.)"));

    switch (elegirCuotas) {
        case 1:
            alert(`El precio final en 1 pago es de : $${suma(ingresarPrecio, (ingresarPrecio * 0.08))}`);
            break;

        case 3:
            alert(`El precio final en 3 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.15))}`);
            break;

        case 6:
            alert(`El precio final en 6 cuotas es de : $${suma(ingresarPrecio,(ingresarPrecio * 0.30))}`);
            break;

        default:
            alert("El numero de cuotas ingresado no es valido.");
    }
}

    function precio(precio) {
        return precio = parseFloat(prompt("Ingrese el precio de su producto"));
    }