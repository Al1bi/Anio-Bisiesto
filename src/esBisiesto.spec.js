import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El anio 4 deberia considerarse como bisiesto", () => {
    expect( esBisiesto(4) ).toEqual(true);
  });

  it("El anio 5 no deberia considerarse como bisiesto", () => {
    expect( esBisiesto(5) ).toEqual(false);
  });

  it("El anio 400 deberia considerarse como bisiesto", () => {
    expect( esBisiesto(400) ).toEqual(true);
  });

  it("El anio 2000 deberia considerarse como bisiesto", () => {
    expect( esBisiesto(2000) ).toEqual(true);
  });

  it("El anio 2100 no deberia considerarse como bisiesto", () => {
    expect( esBisiesto(2100) ).toEqual(false);
  });

  it("El anio 1900 no deberia considerarse como bisiesto", () => {
    expect( esBisiesto(1900) ).toEqual(false);
  });


});
