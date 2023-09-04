const valorIPVA = require("../src");
const casosDeTeste = require("./config");

describe("Cenário 1 - Teste do valorIPVA", () => {
  for (const casoDeTeste of casosDeTeste) {
    const { valorVeiculo, arredondar, ipvaEsperado, nome } = casoDeTeste;

    test(nome, () => {
      const ipva = valorIPVA(valorVeiculo, arredondar);

      expect(ipva).toEqual(ipvaEsperado);
    });
  }
});
