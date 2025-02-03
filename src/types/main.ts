interface HistoryDateItem {
    years: Array<number>[],
    label:string,
    number:number,
    id: string
}

interface HistoryDateProps {
    data: Array<HistoryDateItem>[],
    lenght:number,
    dataAtrr?:number,
    current:number
}

interface EventDesriptionProps {
    year: string,
    description: string
}

interface CircleLabelProps {
    data:any,
    currentPage: number
}


interface PointData {
    years: Array<number>[],
    label:string,
    number:number,
    id: string
}


interface CircleDateProps {
    points: PointData[],
    currentPage:number,
    setCurrentPage: (currentPage:number) => void,
    dataAtrr:number | null
}



interface CirclePointProps {
    x: number;
    y: number;
    number: number;
    rotation: number;
    isActive: boolean;
    onClick: () => void;
    label:string
}


interface SliderProps {
    currentPage: number
}

interface SliderButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: "left" | "right";
}


interface PaginationProps {
    totalPages: number,
    currentPage:number,
    setCurrentPage: (currentPage:number) => void
}


interface PaginationButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: "left" | "right";
}


interface HistoryYearProps {
    years: any;
    currentPage:number
}