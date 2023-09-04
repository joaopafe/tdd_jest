const casosDeTeste = [
  {
    nome: "Utilizar valorIPVA com valor menor que 60000",
    valorVeiculo: 10000,
    arredondar: true,
    ipvaEsperado: 10000 * 0.04,
  },

  {
    nome: "Utilizar valorIPVA com valor igual à 60000",
    valorVeiculo: 60000,
    arredondar: true,
    ipvaEsperado: 60000 * 0.04,
  },

  {
    nome: "Utilizar valorIPVA com valor maior que 60000",
    valorVeiculo: 70000,
    arredondar: true,
    ipvaEsperado: 70000 * 0.1,
  },

  {
    nome: "Utilizar valorIPVA com valor igual à zero",
    valorVeiculo: 0,
    arredondar: true,
    ipvaEsperado: 0,
  },

  {
    nome: "Utilizar valorIPVA com valor negativo",
    valorVeiculo: -10000,
    arredondar: true,
    ipvaEsperado: 0,
  },

  {
    nome: "Utilizar valorIPVA com arredondamento true",
    valorVeiculo: 10351,
    arredondar: true,
    ipvaEsperado: Math.ceil(10351 * 0.04),
  },

  {
    nome: "Utilizar valorIPVA com arredondamento false",
    valorVeiculo: 10351,
    arredondar: false,
    ipvaEsperado: 10351 * 0.04,
  },
];

module.exports = casosDeTeste;
