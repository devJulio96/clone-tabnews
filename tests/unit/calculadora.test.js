const calculadora = require("../../models/calculadora");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 2 deveria retornar 7", () => {
  const resultado = calculadora.somar(5, 2);
  expect(resultado).toBe(7);
});

test("somar 'banana' + 2 deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar("banana", 2);
  expect(resultado).toBe("Erro");
});
