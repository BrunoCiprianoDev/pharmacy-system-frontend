import { urlServer } from "../../serverConfig"

export const parametrosDevolucoes = [
    { id: 1, atributo: 'registerDate', rotulo: 'Data da devolucao', tipo: 'date' },
    { id: 2, atributo: 'description', rotulo: 'Venda', tipo: 'text' },
    { id: 3, atributo: 'merchandiseName', rotulo: 'Mercadoria', tipo: 'autoComplete', url: `${urlServer}/merchandises/search`, atributoVisivel: 'name', atributoSelect: 'merchandiseId' },
    { id: 3, atributo: 'saleDate', rotulo: 'Mercadoria', tipo: 'autoComplete', url: `${urlServer}/merchandises/search`, atributoVisivel: 'name', atributoSelect: 'merchandiseId' },
]