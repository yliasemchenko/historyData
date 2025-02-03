import { styled } from 'styled-components'

const StyleButton = styled.button<{ disabled: boolean }>`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid rgba(66, 86, 122, 0.5);
    background: white;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    transition: background 0.2s;

    &:hover {
        background: ${({ disabled }) => (disabled ? "white" : "#f0f0f0")};
    }

    @media (min-width: 310px) and (max-width: 425px) {
        width: 25px;
        height: 25px;
    }
    @media (min-width: 1440px) and (max-width: 1440px) {
        width: 40px;
        height: 40px;
    }
`

const StyleArrow = styled.span<{ direction: "left" | "right" }>`
    width: 10px;
    height: 10px;
    border-top: 2px solid rgba(66, 86, 122, 1);
    border-left: 2px solid rgba(66, 86, 122, 1);
    transform: ${({ direction }) => (direction === "left" ? "rotate(-45deg)" : "rotate(135deg)")};
    @media (min-width: 310px) and (max-width: 321px) {
        width: 5px;
        height: 5px;
    }
`

export {
    StyleButton,
    StyleArrow
}