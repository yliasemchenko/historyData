import { styled } from 'styled-components'

const StyleContainerLabel = styled.div`
    position: absolute;
    left:62%;
    top:23%;

    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 50%;
        top:25%;
    }
    @media (min-width: 310px) and (max-width: 425px) {
        display:block;
        width: 50%;
        position: static;
        height:20px;
    }
`

const StyleLabelText = styled.p`
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    color:#42567A;

    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 50%;
    }
    @media (min-width: 310px) and (max-width: 425px) {
        font-family: PT Sans;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        text-align: left;
    }
`

export {
    StyleContainerLabel, 
    StyleLabelText
}