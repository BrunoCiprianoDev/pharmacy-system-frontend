import { urlServer } from "../../serverConfig"

export const parametrosLotes = [
    { id: 1, atributo: 'merchandiseName', rotulo: 'Mercadoria', tipo: 'autoComplete', url: `${urlServer}/merchandises/search`, atributoVisivel: 'name', atributoSelect: 'merchandiseId' },
    { id: 2, atributo: 'noteNumber', rotulo: 'Número da nota', tipo: 'autoComplete', url: `${urlServer}/purchases/search`, atributoVisivel: 'noteNumber', atributoSelect: 'purchaseId' },
    { id: 3, atributo: 'units', rotulo: 'Unidades', tipo: 'number'},
    { id: 4, atributo: 'number', rotulo: 'Lote', tipo: 'text' },
    { id: 5, atributo: 'expirationDate', rotulo: 'Validade', tipo: 'date' },
]