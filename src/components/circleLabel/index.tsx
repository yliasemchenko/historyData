import { StyleContainerLabel, StyleLabelText } from "./style"
import { useEffect, useRef, useState } from "react"
import { CircleLabelProps } from "../../types/interfaces/circle";
import './style.css'


const CircleLabel:React.FC<CircleLabelProps> = (props) => {

    const { data, currentPage } = props
    const label = data.find((item:any) => item.number === currentPage).label
    const labelRef = useRef<HTMLParagraphElement>(null)
    const [showLabel, setShowLabel] = useState("")
    const [isFading, setIsFading] = useState(false)

    const isMobile = window.innerWidth < 426

    useEffect(() => {
        setShowLabel("")
        setIsFading(false)

        let timer: number | null = null

        if (!isMobile) {
            timer = window.setTimeout(() => {
                setShowLabel(label)
                setIsFading(true)
            }, 4000)
        } else {
            timer = window.setTimeout(() => {
                setShowLabel(label)
                setIsFading(true)
            }, 1000)
        }

        return () => {
            if (timer) clearTimeout(timer)
        };
    }, [currentPage])

    return (
        <StyleContainerLabel>
            <StyleLabelText ref={labelRef} className={isFading ? "fade-in" : ""}>{showLabel}</StyleLabelText>
        </StyleContainerLabel>
    )
}

export default CircleLabel