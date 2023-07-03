export const parametrosVendas = [
    { id: 1, atributo: 'saleDate', rotulo: 'Data ', tipo: 'date' },
    { id: 2, atributo: 'employeeName', rotulo: 'Funcionario', tipo: 'text' },
    { id: 3, atributo: 'clientName', rotulo: 'Cliente', tipo: 'text' },
    { id: 4, atributo: 'total', rotulo: 'Total', tipo: 'text', toFixed: true, before: "R$" },
]

export const parametroItemsVenda = [
    { id: 1, atributo: 'merchandiseName', rotulo: 'Mercadorias', tipo: 'text' },
    { id: 2, atributo: 'lotNumber', rotulo: 'Lote', tipo: 'text' },
    { id: 3, atributo: 'sellPrice', rotulo: 'Preço', tipo: 'text', before: "R$",  toFixed: true },
    { id: 4, atributo: 'units', rotulo: 'Unidades', tipo: 'text' },
    { id: 5, atributo: 'totalItem', rotulo: 'Total item', tipo: 'text', before: "R$" },
]