function numeroAleatorio(min = 1, max = 100000) {
  return parseInt(Math.random() * (max - min)) + min;
}

export default function handler(req, rest) {
  rest.status(200).json([
    { id: numeroAleatorio(), nome: "Caneta", preco: 5.6 },
    { id: numeroAleatorio(), nome: "Caderno", preco: 15.6 },
    { id: numeroAleatorio(), nome: "Borracha", preco: 7.6 },
    { id: numeroAleatorio(), nome: "Tesoura", preco: 21.55 },
  ]);
}
