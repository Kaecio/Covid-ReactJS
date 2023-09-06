import numeral from 'numeral';

 export const sortData = (data) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1))
 }

 export const formatNumber = (data) => data ? `${numeral(data).format('0.000a')}` : `0.0`;

 export const formatNumbers = (data) => {
    const format = new Intl.NumberFormat('pt')
    if(!data) return 'carregando...'
    return format.format(data)
 }