/**
 * Calcula o valor do IPVA de veículo baseado no valor do veículo e
 * na taxa de IPVA.
 * A taxa de IPVA será aplicada em 4% para veículos de até R$ 60.000,00,
 * e 10% para veículos com valor acima.
 * Caso arredondar=true, o valor do IPVA é arredondado para o inteiro
 * maior mais próximo.
 * Caso o valor do veículo seja negativo, o valor retornado deverá ser
 * igual à zero.
 *
 * @example valorIPVA(10000, true) // 400
 * @example valorIPVA(70000, true) // 7000
 * @param {number} valorVeiculo valor do veículo em reais
 * @param {boolean} arredondar caso igual à true, o valor é arredondado
 * para inteiro acima mais próximo
 * @returns {number} valor do IPVA em reais
 */

const valorIPVA = (valorVeiculo, arredondar) => {
  if (valorVeiculo <= 0) {
    return 0;
  } else if (valorVeiculo <= 60000) {
    const ipva = valorVeiculo * 0.04;

    if (arredondar == true) {
      return Math.ceil(ipva);
    } else return ipva;
  } else if (valorVeiculo > 60000) {
    const ipva = valorVeiculo * 0.1;

    if (arredondar == true) {
      return Math.ceil(ipva);
    } else return ipva;
  }
};

module.exports = valorIPVA;
