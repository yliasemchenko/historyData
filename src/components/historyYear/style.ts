import { styled } from 'styled-components'

const StyleYearBlock = styled.div`
    display:flex;
    width:100%;
    justify-content:space-around;
    align-items:center;
    margin-bottom:70px;
    @media (min-width: 310px) and (max-width: 425px) {
        display:flex;
        margin: 0 auto;
        /* justify-content:space-between; */
        margin-bottom: 75px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 150px;
        line-height: 72.46px;
        margin-bottom:100px;
    }
`

const StyleYearFirstText = styled.p`
    font-family: PT Sans;
    font-size: 200px;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -0.02em;
    margin-right:20px;
    color:#5D5FEF;
    @media (min-width: 310px) and (max-width: 425px) {
        font-size: 56px;
        line-height: 72.46px;
        margin-right:0;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 150px;
        line-height: 72.46px;
    }
`

const StyleYearSecondText = styled.p`
    font-family: PT Sans;
    font-size: 200px;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -0.02em;
    color:#EF5DA8;
    @media (min-width: 310px) and (max-width: 425px) {
        font-size: 56px;
        line-height: 72.46px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 150px;
        line-height: 72.46px;
    }
`

export {
    StyleYearBlock,
    StyleYearFirstText,
    StyleYearSecondText
}