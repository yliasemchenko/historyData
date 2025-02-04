import { styled } from 'styled-components'

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
    transition: transform 4s ease-in-out;
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


export {
    StyleCircle,
}