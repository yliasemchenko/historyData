import { styled } from 'styled-components'

const StylePoint = styled.div.attrs<{ 
    $x: number, 
    $y: number, 
    $rotation: number, 
    $isactive: boolean 
}>(props => ({
    style: {
      left: `${props.$x}px`,
      top: `${props.$y}px`
  }
}))<{ $x: number, $y: number, $rotation: number, $isactive: boolean }>`
    position: absolute;
    width: 6px;
    height: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42567A;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform-origin: center center;
    will-change: transform;

    transform: rotate(${props => -props.$rotation}deg); 

    &:hover {
      transform: rotate(${props => -props.$rotation}deg) scale(8);
      background: #F4F5F9;
      box-shadow: 0 0 0 0.2px #42567A;
    }

    &.active {
      transform: rotate(${props => -props.$rotation}deg) scale(8);
      background: #F4F5F9;
      box-shadow: 0 0 0 0.2px #42567A;
    }
    
`
  
const StylePointNumber = styled.p`
    font-size: 20px;
    color:#42567A;
    transform: scale(calc(1 / 6));
    user-select: none; 
    transition: transform 0.5s ease-in-out; 
`
const StylePointLabel = styled.p`
    font-size: 20px;
    color: #42567A;
    display:none;
`


export {
    StylePoint,
    StylePointNumber,
    StylePointLabel
}