import { urlServer } from "../../serverConfig";

export const parametrosMercadorias = [
  { id: 1, atributo: 'name', rotulo: 'Nome', tipo: 'text',  placeholder: 'Nome da mercadoria' },
  { id: 2, atributo: 'code', rotulo: 'Código', tipo: 'text',  placeholder: '999999-999999-9' },
  {
    id: 3, atributo: 'department', rotulo: 'Departamento', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'MEDICAMENTO' },
      { id: 2, valor: 'SUPLEMENTO' },
      { id: 3, valor: 'DERMATOLOGIA' },
      { id: 4, valor: 'HIGIENE' },
      { id: 5, valor: 'GERIATRIA' },
      { id: 6, valor: 'INFANTIL' },
      { id: 7, valor: 'BELEZA' },
      { id: 8, valor: 'OUTRO' }
    ]
  },
  {
    id: 4, atributo: 'classification', rotulo: 'Classificação', tipo: 'select',
    opcoes: [
      { id: 1, valor: 'LIVRE' },
      { id: 2, valor: 'GENERICO' },
      { id: 3, valor: 'SIMILAR' },
      { id: 4, valor: 'REFERENCIA' },
    ]
  },
  { id: 5, atributo: 'brand', rotulo: 'Marca', tipo: 'text'},
  { id: 6, atributo: 'formule', rotulo: 'Principio ativo', tipo: 'text' },
  {
    id: 8, atributo: 'stripe', rotulo: 'Tarja:', tipo: 'select',
    opcoes: [
      { id: 4, valor: 'SEM_TARJA' },
      { id: 1, valor: 'AMARELA' },
      { id: 2, valor: 'VERMELHA' },
      { id: 3, valor: 'PRETA' },
    ]
  },
  {id: 10, atributo: 'storageTemperature', rotulo: 'Temperatura de armazenamento', tipo: 'number'},
  { id: 11, atributo: 'rms', rotulo: 'Registro MS', tipo: 'text', placeholder: '9999999999999(13 digitos)' },
  { id: 12, atributo: 'minimumStock', rotulo: 'Estoque minimo', tipo: 'number', placeholder: '100' },
  { id: 13, atributo: 'maximumStock', rotulo: 'Estoque máximo', tipo: 'number', placeholder: '350' },
  { id: 17, atributo: 'fullPrice', rotulo: 'Preço', tipo: 'number', placeholder: 'R$11.99' },
  { id: 18, atributo: 'discountGroupName', rotulo: 'Grupo desconto', tipo: 'autoComplete', url: `${urlServer}/discounts/search`, atributoVisivel: 'name', atributoSelect: 'discountGroupId' },
  { id: 19, atributo: 'comission', rotulo: 'Percentual de comissão', tipo: 'number', placeholder: "5%" },
  { id: 20, atributo: 'pmc', rotulo: 'PMC', tipo: 'number', placeholder: 'Preço médio consumo' },
  { id: 21, atributo: 'description', rotulo: 'Descricao', tipo: 'textarea', placeholder: 'Descrição da mercadoria....' }
]
    