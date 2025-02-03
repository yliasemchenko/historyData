export interface HistoryDateItem {
    years: Array<number>,
    label:string,
    number:number,
    id: string
}

export interface HistoryDateProps {
    data: Array<HistoryDateItem>,
    lenght:number,
    dataAtrr?:number,
    current:number
}


export interface HistoryYearProps {
    yearsArr: Array<HistoryDateItem>,
    currentPage:number,
}