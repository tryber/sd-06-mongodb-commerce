db.produtos.updateMany(
  { valorUnitario: { $exits: 0 } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.products.find(
  { },
  { nome: 1, valorUnitario: 1, _id: 0 },
);
