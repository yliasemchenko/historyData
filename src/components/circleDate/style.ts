import  {styled}  from 'styled-components'

const StyleCircle = styled.div`
    position: absolute;
    top: 21%;
    left: 31%;
    width: 530px;
    height: 530px;
    border-radius: 50%;
    border: 1px solid #D9D9D9;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    z-index: 10;
    @media (min-width: 1440px) and (max-width: 1440px) {
        top: 23%;
        width: 430px;
        height: 430px;
    }
    @media (min-width: 310px) and (max-width: 425px) {
        display:none
    }

    
`

const PointDescr = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    color: #42567A;
    transform: scale(calc(1 / 6));
    opacity:0;
    &.active{
        opacity:1
    }
`

export {
    StyleCircle,
    PointDescr
}