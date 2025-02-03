import { StylePoint, StylePointNumber, StylePointLabel } from './style'
import { CirclePointProps } from '../../../types/interfaces/circle'

const CirclePoint: React.FC<CirclePointProps> = (props) => {

    const { x ,y, number, isActive, onClick, rotation, label } = props
    return(
        <StylePoint
            $x={x}
            $y={y}
            $rotation={rotation}
            $isactive={isActive}
            className={isActive ? "active" : ""}
            onClick={onClick}
        >
            <StylePointNumber>
                {number}
            </StylePointNumber>
            <StylePointLabel>
                {label}
            </StylePointLabel>
        </StylePoint>
    )
}

export default CirclePoint