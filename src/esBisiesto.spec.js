import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El anio 4 deberia considerarse como bisiesto", () => {
    const result = esBisiesto(4);
    expect(result).toEqual(true);
  });
});
