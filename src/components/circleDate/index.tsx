import { useEffect, useRef, useState } from "react";
import { StyleCircle} from "./style"
import CirclePoint from "./circlePoint";
import { CircleDateProps } from "../../types/interfaces/circle";

const CircleDate: React.FC<CircleDateProps> = (props) => {

    const circleRef = useRef<HTMLDivElement>(null) 

    const { points, currentPage, setCurrentPage } = props

    const [rotation, setRotation] = useState<number>(-60)
    const totalPoints = points.length

    const radiusLaptopL = window.innerWidth > 1439 && window.innerWidth < 1441

    useEffect(() => {
        if (circleRef.current) {
            circleRef.current.style.transform = `rotate(${rotation}deg)`;
        }
    }, [rotation]);

    useEffect(() => {
        const angleInDegrees = (360 / totalPoints) * (currentPage - 1)
        const targetRotation = (angleInDegrees + 60) * (-1)
        setRotation(targetRotation)
    }, [currentPage])

    const getPointPositions = (index:number, totalPoints:number, radius:number) => {
        const angle = (360 / totalPoints) * index
        const radian = (Math.PI / 180) * angle
        return {
            x: radius + radius * Math.cos(radian) - 4,
            y: radius + radius * Math.sin(radian) - 4, 
        }
    }

    const handleClick = (number:number, index:number) => {
        const angleInDegrees = (360 / totalPoints) * index
        const targetRotation = (angleInDegrees + 60) * (-1)
        setRotation(targetRotation)
        setCurrentPage(Number(number))
    }

    return (
        <>
            <StyleCircle ref={circleRef}>
                {points.map((point, index) => {
                    const { number, label } = point
                    const { x, y } = getPointPositions(index, totalPoints, !radiusLaptopL ? 265 : 215)
                    return (
                        <CirclePoint
                        key={number}
                        x={x}
                        y={y}
                        number={number}
                        isActive={number === currentPage}
                        onClick={() => handleClick(number, index)}
                        rotation={rotation}
                        label={label}
                        />
                    );
                })}
            </StyleCircle>
        </>
    )
}

export default CircleDate