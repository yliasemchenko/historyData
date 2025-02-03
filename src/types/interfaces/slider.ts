
export interface SliderProps {
    currentPage: number
}

export interface SliderButtonProps {
    onClick: () => void;
    disabled: boolean;
    direction: "left" | "right";
}