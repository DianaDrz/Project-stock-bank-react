export const totalPrice = (accions) => {
    let sum = 0
    accions.forEach(accion => sum += accion.valueMonetary)
    return sum
  }

