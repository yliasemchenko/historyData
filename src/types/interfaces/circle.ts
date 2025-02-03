export interface CircleLabelProps {
    data:any,
    currentPage: number
}


interface PointData {
    years: Array<number>,
    label:string,
    number:number,
    id: string
}


export interface CircleDateProps {
    points: PointData[],
    currentPage:number,
    setCurrentPage: (currentPage:number) => void,
    dataAtrr:number | null
}



export interface CirclePointProps {
    x: number;
    y: number;
    number: number;
    rotation: number;
    isActive: boolean;
    onClick: () => void;
    label:string
}
