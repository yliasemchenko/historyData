import { StyleButton, StyleArrow } from "./style";
import { PaginationButtonProps } from "../../../types/interfaces/pagination";

const PaginationButton:React.FC<PaginationButtonProps> = (props) => {

    const { onClick, disabled, direction } = props

    return(
        <StyleButton onClick={onClick} disabled={disabled}>
            <StyleArrow direction={direction} />
        </StyleButton>
    )
}

export default PaginationButton