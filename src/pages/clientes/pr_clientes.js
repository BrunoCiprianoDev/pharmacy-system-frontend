export const parametrosClientes = [
  { id: 1, atributo: 'name', rotulo: 'Nome', tipo: 'text',  placeholder: 'Nome do cliente' },
  { id: 2, atributo: 'cpf', rotulo: 'CPF', tipo: 'text', placeholder: '999.999.999-99', tipo: 'textMask', mask: "999.999.999-99"   },
  { id: 3, atributo: 'birthDate', rotulo: 'Data nascimento', tipo: 'date' },
  { id: 4, atributo: 'cep', rotulo: 'CEP', tipo: 'text', placeholder: '99.999-999', tipo: 'textMask', mask: "99.999-999"},
  {
    id: 5, atributo: 'uf', rotulo: 'UF', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'AC' },
      { id: 2, valor: 'AL' },
      { id: 3, valor: 'AP' },
      { id: 4, valor: 'AM' },
      { id: 5, valor: 'BA' },
      { id: 6, valor: 'CE' },
      { id: 7, valor: 'DF' },
      { id: 8, valor: 'ES' },
      { id: 9, valor: 'GO' },
      { id: 10, valor: 'MA' },
      { id: 11, valor: 'MT' },
      { id: 12, valor: 'MS' },
      { id: 13, valor: 'MG' },
      { id: 14, valor: 'PA' },
      { id: 15, valor: 'PB' },
      { id: 16, valor: 'PR' },
      { id: 17, valor: 'RJ' },
      { id: 18, valor: 'RN' },
      { id: 19, valor: 'RS' },
      { id: 20, valor: 'RO' },
      { id: 21, valor: 'RR' },
      { id: 22, valor: 'SC' },
      { id: 23, valor: 'SE' },
      { id: 24, valor: 'TO' },
    ]
  },
  { id: 6, atributo: 'city', rotulo: 'Cidade', tipo: 'text', placeholder: 'Nome da cidade' },
  { id: 7, atributo: 'neightborhood', rotulo: 'Bairro', tipo: 'text', placeholder: 'Nome do bairro' },
  { id: 8, atributo: 'addressDetail', rotulo: 'Logradouro', tipo: 'text', placeholder: 'Rua.Nome Exemplo' },
  { id: 9, atributo: 'number', rotulo: 'Número', tipo: 'text', placeholder: '919' },
  { id: 10, atributo: 'complement', rotulo: 'Complemento', tipo: 'text', placeholder: 'Ap.101' },
  { id: 11, atributo: 'phone', rotulo: 'Telefone um', tipo: 'text', placeholder: '(99)99999-9999', tipo: 'textMask', mask: "999.999.999-99" },
  { id: 12, atributo: 'email', rotulo: 'E-mail', tipo: 'email', placeholder: 'email@email.com' },
]