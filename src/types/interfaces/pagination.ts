
export interface PaginationProps {
    totalPages: number,
    currentPage:number,
    setCurrentPage: (currentPage:number) => void
}


export interface PaginationButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: "left" | "right";
}
