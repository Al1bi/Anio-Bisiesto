import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El anio 4 deberia considerarse como bisiesto", () => {
    expect( esBisiesto(4) ).toEqual(true);
  });

  it("El anio 5 no deberia considerarse como bisiesto", () => {
    expect( esBisiesto(5) ).toEqual(false);
  });

});
