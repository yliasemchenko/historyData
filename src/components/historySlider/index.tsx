import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { StyleSliderContainer } from './style';
import EventDescription from '../eventDescription';
import { useEffect, useRef, useState } from 'react';
import SliderButton from './sliderButton';
import { getData } from '../../services/services';
import { Pagination } from "swiper/modules";
import { SliderProps } from '../../types/interfaces/slider';
import './style.css'

const HistoryDataSlider:React.FC<SliderProps> = (props) => {

  const { currentPage } = props
  const [sliderData, setSliderData] = useState<any>(null)
  const [isBeginning, setIsBeginning] = useState<boolean>(true)
  const [isEnd, setIsEnd] = useState<boolean>(false)
  const swiperRef = useRef<SwiperClass | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [animateSlides, setAnimateSlides] = useState<boolean>(false)



  const handleSlideChange = (swiper: SwiperClass) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  useEffect(() => {

    getData(currentPage)
      .then((sliderInfo) => {
          setSliderData(sliderInfo.events)
          setAnimateSlides(true)
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => setAnimateSlides(false), 4000)
      })
      .catch((error) => console.log(error))
    
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [currentPage])
  
  const isMobile = window.innerWidth < 426
  
  return (
    <StyleSliderContainer>
      {!isBeginning && !isMobile && <SliderButton onClick={() => swiperRef.current?.slidePrev()} disabled={isBeginning} direction="left" />}

    
        <Swiper
          modules={[Pagination]}
          observer={true}
          observeParents={true}
          pagination={{
            dynamicBullets: true,
            clickable:true,
          }}
          style={{
            width: isMobile ? "100%" : "90%",
            height: isMobile ? "240px" : "150px",

          }}
          slidesPerView={3.3}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          loop={false}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: { 
              slidesPerView:1,
              pagination:{
                enabled:true,
              },
              spaceBetween:10
            },
            426: {
              slidesPerView: 3.3,
              pagination:{
                enabled:false,
              }, 
              spaceBetween: 20 
            },
            1440: {
              slidesPerView:2.5,
              pagination:{
                enabled:false,
              }, 
              spaceBetween: 15 
            },
            1920: {
              slidesPerView:3.3,
              pagination:{
                enabled:false,
              }, 
              spaceBetween:50,
            }
          }}
        >
          {sliderData?.map((item: any, index: any) => (
            <SwiperSlide 
            key={index} 
            className={`swiper-slide ${animateSlides ? 'fade-in' : ''}`}
            style={{padding: isMobile ? "5px" : "0",}}>
              <EventDescription year={item.year} description={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>

      {!isEnd && !isMobile && <SliderButton onClick={() => swiperRef.current?.slideNext()} disabled={isEnd} direction="right" />}
    </StyleSliderContainer>
  )
}

export default HistoryDataSlider
