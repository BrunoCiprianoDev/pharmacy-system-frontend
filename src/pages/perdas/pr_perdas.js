import { urlServer } from "../../serverConfig"

export const parametrosPerdas = [
    { id: 1, atributo: 'registerDate', rotulo: 'Data', tipo: 'date' },
    { id: 2, atributo: 'merchandiseName', rotulo: 'Mercadoria', tipo: 'text'},
    { id: 3, atributo: 'lotNumber', rotulo: 'Lote', tipo: 'autoComplete', url: `${urlServer}/lots/search`, atributoVisivel: 'number', atributoSelect: 'lotId' },
    { id: 4, atributo: 'units', rotulo: 'Unidades', tipo: 'text' },
    { id: 5, atributo: 'employeeName', rotulo: 'Funcionário', tipo: 'autoComplete', url: `${urlServer}/employees/search`, atributoVisivel: 'name', atributoSelect: 'employeeId' },
    { id: 6, atributo: 'description', rotulo: 'Descrição', tipo: 'text' }
]

// { id: 18, atributo: 'discountGroupName', rotulo: 'Grupo desconto', tipo: 'autoComplete', url: `${urlServer}/discounts/search`, atributoVisivel: 'name', atributoSelect: 'discountGroupId' },
