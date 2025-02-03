import { StyleEventBlock, StyleEventYear, StyleEventDescription } from "./style"
import { EventDesriptionProps } from "../../types/interfaces/eventsDescription"

const EventDescription = (props:EventDesriptionProps) => {

    const { year, description } = props

    return(
        <>
            <StyleEventBlock>
                <StyleEventYear>{year}</StyleEventYear>
                <StyleEventDescription>{description}</StyleEventDescription>
            </StyleEventBlock>
        </>
    )
}

export default EventDescription