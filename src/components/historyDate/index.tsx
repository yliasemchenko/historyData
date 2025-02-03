import { useEffect, useState } from "react";
import CircleDate from "../circleDate";
import HistoryYear from "../historyYear";
import { StyleSectionDate, StyleContainer, StyleHeader, StyleSliderWrapper, StyleDevider } from "./style"
import Pagination from "../pagination";
import HistoryDataSlider from "../historySlider";
import CircleLabel from "../circleLabel";
import { HistoryDateProps } from "../../types/interfaces/historyData";


const HistoryDate:React.FC<HistoryDateProps> = (props) => {

    const isMobile = window.innerWidth < 426


    const { data, lenght, dataAtrr, current } = props
    const [currentPage, setCurrentPage] = useState(current)

    return (
        <>
            {isMobile ? 
            <StyleSectionDate>
                <StyleContainer>
                    <StyleHeader>Исторические даты</StyleHeader>
                    <HistoryYear yearsArr={data} currentPage={currentPage} />
                    <CircleLabel data={data} currentPage={currentPage}/>
                    <StyleDevider></StyleDevider>
                    <StyleSliderWrapper>
                        <Pagination  totalPages={lenght} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        <HistoryDataSlider currentPage={currentPage} />
                    </StyleSliderWrapper>
                    <CircleDate points={data.filter((item:any) => item.id <= lenght)} currentPage={currentPage} setCurrentPage={setCurrentPage} dataAtrr={!dataAtrr ? null : dataAtrr}/>
                </StyleContainer>
            </StyleSectionDate>
            :
            <StyleSectionDate>
                <StyleContainer>
                    <CircleLabel data={data} currentPage={currentPage}/>
                    <StyleHeader>Исторические даты</StyleHeader>
                    <HistoryYear yearsArr={data} currentPage={currentPage} />
                    <StyleSliderWrapper>
                        <Pagination  totalPages={lenght} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                        <HistoryDataSlider currentPage={currentPage} />
                    </StyleSliderWrapper>
                    <CircleDate points={data.filter((item:any) => item.id <= lenght)} currentPage={currentPage} setCurrentPage={setCurrentPage} dataAtrr={!dataAtrr ? null : dataAtrr}/>
                </StyleContainer>
            </StyleSectionDate>
            }
        </>
            
    )
}


export default HistoryDate