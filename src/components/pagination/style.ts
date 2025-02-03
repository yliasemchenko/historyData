import { styled } from 'styled-components';
 
const StylePaginationContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: left;
    justify-content:space-between;
    gap: 16px;
    margin-bottom:40px;
    width:120px;
    @media (min-width: 310px) and (max-width: 425px) {
        position:absolute;
        z-index:10;
        width: 60px;
        gap: 8px;
        margin-bottom:0;
        top:80%;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 100px;
        gap: 12px;
    }
`;

const StyleButtonContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content:space-between;
    width:100%;
`

const StylePaginationText = styled.span`
    color:rgba(66, 86, 122, 1);
    text-align:left;
`

export {
    StylePaginationContainer,
    StyleButtonContainer,
    StylePaginationText
}