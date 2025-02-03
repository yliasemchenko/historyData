import  {styled}  from 'styled-components'

const StyleEventBlock = styled.div`
    display: block;
    width:320px
    @media (min-width: 310px) and (max-width: 425px) {
        width:100%;
    }

`
const StyleEventYear = styled.p`
    font-family: Bebas Neue;
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    text-underline-position: from-font;
    color: #3877EE;
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 20px;
    }
    @media (min-width: 310px) and (max-width: 425px) {
        font-size: 20px;
    }
`

const StyleEventDescription = styled.p`
    font-family: PT Sans;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #42567A;
    @media (min-width: 1440px) and (max-width: 1440px) {
        font-size: 17px;
    }
    @media (min-width: 310px) and (max-width: 425px) {
        font-size: 17px;
    }

`

export {
    StyleEventDescription,
    StyleEventBlock,
    StyleEventYear
}