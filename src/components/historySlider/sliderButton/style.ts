import { styled } from 'styled-components'

const StyleButton = styled.button<{ disabled: boolean }>`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 1);
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    transition: background 0.2s;
    border:none;
    box-shadow: 0px 0px 15px 0px rgba(56, 119, 238, 0.1); 
/*     position:absolute;
    top:0;
    left:0; */

    &:hover {
        background: ${({ disabled }) => (disabled ? "white" : "#f0f0f0")};
    }
`

const StyleArrow = styled.span<{ direction: "left" | "right" }>`
    width: 10px;
    height: 10px;
    border-top: 2px solid rgba(56, 119, 238, 1);
    border-left: 2px solid rgba(56, 119, 238, 1);
    transform: ${({ direction }) => (direction === "left" ? "rotate(-45deg)" : "rotate(135deg)")};
`

export {
    StyleButton,
    StyleArrow
}