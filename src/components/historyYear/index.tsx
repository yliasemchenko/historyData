import React, { useEffect, useState } from 'react';
import { StyleYearBlock, StyleYearFirstText, StyleYearSecondText } from './style';
import { HistoryYearProps } from '../../types/interfaces/historyData'; 

const HistoryYear: React.FC<HistoryYearProps> = (props) => {

    const { yearsArr , currentPage } = props  
    const currentYear = yearsArr.find((item) => item.number === currentPage);
    const [displayedYear1, setDisplayedYear1] = useState(currentYear?.years?.[0] ?? "")
    const [displayedYear2, setDisplayedYear2] = useState(currentYear?.years?.[1] ?? "")

    const animateNumber = (start: number, end: number, duration: number, updateCallback: (value: number) => void) => {
        const startTime = performance.now();
    
        const step = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)
            const currentValue = start + (end - start) * progress
            updateCallback(Math.floor(currentValue))

            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }
    
        requestAnimationFrame(step)
    }
    
    useEffect(() => {
        if (currentYear) {
            const startYear1 = parseInt(displayedYear1.toString(), 10)
            const endYear1 = parseInt(currentYear.years[0].toString(), 10)
            const startYear2 = parseInt(displayedYear2.toString(), 10)
            const endYear2 = parseInt(currentYear.years[1].toString(), 10)

            animateNumber(startYear1, endYear1, 4000, setDisplayedYear1)
            animateNumber(startYear2, endYear2, 4000, setDisplayedYear2)
        }
    }, [currentPage])

    return (
        <StyleYearBlock>
            <StyleYearFirstText>{displayedYear1}</StyleYearFirstText>
            <StyleYearSecondText>{displayedYear2}</StyleYearSecondText>
        </StyleYearBlock>
    )
}

export default HistoryYear
