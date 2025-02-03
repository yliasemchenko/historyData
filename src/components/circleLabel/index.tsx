import { StyleContainerLabel, StyleLabelText } from "./style"
import { useEffect, useRef, useState } from "react"
import gsap from 'gsap';
import { CircleLabelProps } from "../../types/interfaces/circle";


const CircleLabel:React.FC<CircleLabelProps> = (props) => {

    const { data, currentPage } = props
    const label = data.find((item:any) => item.number === currentPage).label
    const labelRef = useRef<HTMLParagraphElement>(null)
    const [showLabel, setShowLabel] = useState("")

    const isMobile = window.innerWidth < 426

    useEffect(() => {
        setShowLabel("")
        let timer: number | undefined;
        if (labelRef.current && !isMobile) {
            timer = window.setTimeout(() => {
                gsap.fromTo(
                    labelRef.current,
                    { 
                        opacity: 0,
                        y: 20
                    },
                    { 
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        onUpdate:() => setShowLabel(label)
                    }
                )
            }, 4000)
        } else {
            gsap.fromTo(
                labelRef.current,
                { 
                    opacity: 0,
                    y: 20
                },
                { 
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    onUpdate:() => setShowLabel(label)
                }
            )
        }
    
        return () => {
        if (timer) {
            clearTimeout(timer)
            gsap.killTweensOf(labelRef.current)
        }
        }
    }, [currentPage])

    return (
        <StyleContainerLabel>
            <StyleLabelText ref={labelRef}>{showLabel}</StyleLabelText>
        </StyleContainerLabel>
    )
}

export default CircleLabel