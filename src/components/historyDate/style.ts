import  { styled }  from 'styled-components'

const StyleSectionDate = styled.section`
    width: 100%;
    background:transparent;
    padding: 0 8% 0 16%;
    @media (min-width: 310px) and (max-width: 425px) {
        padding:0;
        height:100%;
    }
    @media (min-width: 1440px) and (max-width:1440px) {
        padding: 0 8% 0 12%;
    }
`
const StyleContainer = styled.div `
    position: relative;
    max-width: 1440px;
    height:100%;
    border: 1px solid #D9D9D9;
    border-top:none;
    border-bottom:none;
    background: 
    linear-gradient(to right, transparent 50%, #D9D9D9 50%, transparent 50.1%),
    linear-gradient(to bottom, transparent 50%, #D9D9D9 50%, transparent 50.1%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 100px 80px 40px 80px;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    &::before{
        position:absolute;
        content: "";
        top:20%;
        left:-3px;
        width:5px;
        height:15%;
        background: linear-gradient(180deg, #3877EE -5%, #EF5DA8 85%);
        @media (min-width: 310px) and (max-width: 425px) {
            display:none;
        }
    }
    @media (min-width: 310px) and (max-width: 425px) {
        max-width:425px;
        padding: 40px 15px 15px 15px;
        background: none;
        display:block;
        margin:0 auto;
        border:none;
    }
    @media (min-width: 1440px) and (max-width:1440px) {
        padding: 80px 80px 60px 80px;
    }
    
`

const StyleHeader = styled.h2`
    font-size: 56px;
    font-weight: 700;
    line-height: 67.2px;
    text-align: left;
    color: #42567A;
    max-width: 353px;
    margin-bottom:150px;
    @media (min-width: 310px) and (max-width: 425px) {
        font-size: 25px;
        line-height: 24px;
        width:123px;
        margin-bottom:75px;
    }
`
const StyleSliderWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    width:100%;
    position:relative;
    @media (min-width: 310px) and (max-width: 425px) {
        align-self: center;
        flex-direction:column-reverse;
    }
`

const StyleDevider = styled.div`
    width:100%;
    height:1px;
    background: #D9D9D9;
    margin: 20px 0 20px 0;
`

export {
    StyleSectionDate,
    StyleContainer,
    StyleHeader,
    StyleSliderWrapper,
    StyleDevider
}



