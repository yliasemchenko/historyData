import React from "react";
import PaginationButton from "./paginationButton";
import { StylePaginationContainer, StyleButtonContainer, StylePaginationText } from "./style";
import { PaginationProps } from "../../types/interfaces/pagination";

const Pagination:React.FC<PaginationProps> = (props) => {

    const { totalPages, currentPage, setCurrentPage} = props

    return (
        <StylePaginationContainer>
            <StylePaginationText>{String(currentPage).padStart(2, "0")}/{String(totalPages).padStart(2, "0")}</StylePaginationText>
            <StyleButtonContainer>
                <PaginationButton onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} direction="left" />
                <PaginationButton onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} direction="right" />
            </StyleButtonContainer>
        </StylePaginationContainer>
    )
}

export default Pagination