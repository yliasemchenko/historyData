import React, { useEffect, useState } from 'react';
import { StyleYearBlock, StyleYearFirstText, StyleYearSecondText } from './style';
import { gsap } from 'gsap';
import { HistoryYearProps } from '../../types/interfaces/historyData'; 

const HistoryYear: React.FC<HistoryYearProps> = (props) => {

    const { yearsArr , currentPage } = props  
    const currentYear = yearsArr.find((item) => item.number === currentPage);
    const [displayedYear1, setDisplayedYear1] = useState(currentYear?.years?.[0] ?? "")
    const [displayedYear2, setDisplayedYear2] = useState(currentYear?.years?.[1] ?? "")

    useEffect(() => {
        if(currentYear){
            const startYear1 = displayedYear1
            const endYear1 = currentYear.years[0]
            const startYear2 = displayedYear2
            const endYear2 = currentYear.years[1]

            gsap.to({ val: startYear1 }, {
                val: endYear1,
                duration: 4,
                ease: 'power2.out',
                onUpdate: function () {
                    setDisplayedYear1(Math.floor(this.targets()[0].val))
                }
            })
    
            gsap.to({ val: startYear2 }, {
                val: endYear2,
                duration: 4,
                ease: 'power2.out',
                onUpdate: function () {
                    setDisplayedYear2(Math.floor(this.targets()[0].val))
                }
            })
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
