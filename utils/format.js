export const formatCurrency = (price) => {
    const final = []
    const precio = price.toString().split("")
    let j = 0;
    for (let i = precio.length - 1; i >= 0; i--) {
        if (j % 3 === 0) final.push(".")
        final.push(precio[i])
        j++
    }
    if (final[0] === ".") final.shift()
    final.reverse()
    return final.join("")
}


//esta funcion es para ponerle punto cada 3 cifras a los precios de los productos, no borrar, puede servir
