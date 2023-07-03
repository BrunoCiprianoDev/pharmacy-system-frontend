export const parametrosFuncionarios = [
  {id: 1, atributo:'name', rotulo:'Nome', tipo: 'text', placeholder: 'Nome do funcionario'},
  {id: 2, atributo:'cpf', rotulo:'CPF', placeholder: '999.999.999-99', tipo: 'textMask', mask: "999.999.999-99" },
  {id: 3, atributo:'birthDate', rotulo:'Data nascimento', tipo: 'date' },
  {id: 4, atributo:'cep', rotulo:'CEP', tipo: 'text', placeholder: '99.999-999',  tipo: 'textMask', mask: "99.999-99"},
  {id: 5, atributo:'uf', rotulo:'UF', tipo: 'text', placeholder: 'MG'},
  {id: 6, atributo:'city', rotulo:'Cidade', tipo: 'text', placeholder: 'Nome da cidade'},
  {id: 7, atributo:'neightborhood', rotulo:'Bairro', tipo: 'text', placeholder: 'Nome do bairro'},
  {id: 8, atributo:'addressDetail', rotulo:'Logradouro', tipo: 'text', placeholder: 'Rua.Nome Exemplo'},
  {id: 9, atributo:'number', rotulo:'Número', tipo: 'text', placeholder: '919' },
  {id: 10, atributo:'complement', rotulo:'Complemento', tipo: 'text', placeholder: 'Ap.101'},
  {id: 11, atributo:'primaryPhone', rotulo:'Telefone um', tipo: 'text', placeholder: '(99)99999-9999' },
  {id: 12, atributo:'secundaryPhone', rotulo:'Telefone dois', tipo: 'text', placeholder: '(99)99999-9999' },
  {id: 13, atributo:'email', rotulo:'E-mail', tipo: 'email', placeholder: 'email@email.com'},
  {id: 14, atributo:'position', rotulo:'Função', tipo: 'select', 
    opcoes: [
      {id: 1, valor: 'GERENTE'},
      {id: 2, valor: 'VENDEDOR'}
    ]  
  }
]