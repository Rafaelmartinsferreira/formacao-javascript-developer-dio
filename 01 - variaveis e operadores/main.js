const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 158;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log("Eu gastei nesta viagem R$ " + valorGasto.toFixed(2));//quantidade de numeros após a vírgula
