import { StyleButton, StyleArrow } from "./style";
import { SliderButtonProps } from "../../../types/interfaces/slider";


const SliderButton:React.FC<SliderButtonProps> = (props) => {

    const { onClick, disabled, direction } = props

    return(
        <StyleButton onClick={onClick} disabled={disabled}>
            <StyleArrow direction={direction} />
        </StyleButton>
    )
}

export default SliderButton