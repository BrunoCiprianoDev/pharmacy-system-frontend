import { urlServer } from "../../serverConfig"

export const parametrosLotes = [
    { id: 1, atributo: 'noteNumber', rotulo: 'Número da nota', tipo: 'autoComplete', url: `${urlServer}/purchases/search`, atributoVisivel: 'noteNumber', atributoSelect: 'purchaseId' },
    { id: 2, atributo: 'units', rotulo: 'Unidades', tipo: 'number'},
    { id: 3, atributo: 'number', rotulo: 'Lote', tipo: 'text', placeholder: "AAA-9999" },
    { id: 4, atributo: 'expirationDate', rotulo: 'Validade', tipo: 'date' },
    { id: 5, atributo: 'merchandiseName', rotulo: 'Mercadoria', tipo: 'autoComplete', url: `${urlServer}/merchandises/search`, atributoVisivel: 'name', atributoSelect: 'merchandiseId' },
    
]