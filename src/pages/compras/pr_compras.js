import { urlServer } from "../../serverConfig"

export const parametrosCompras = [
  { id: 1, atributo: 'purchaseDate', rotulo: 'Data ', tipo: 'date' },
  { id: 2, atributo: 'total', rotulo: 'Total', tipo: 'number' },
  { id: 3, atributo: 'supplierName', rotulo: 'Fornecedor', tipo: 'autoComplete', url: `${urlServer}/suppliers/search`, atributoVisivel: 'name', atributoSelect: 'supplierId' },
  { id: 4, atributo: 'noteNumber', rotulo: 'Nota fiscal', tipo: 'text' } 
]
