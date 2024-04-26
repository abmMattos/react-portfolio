import { TitleOcupation, TimeOcupation } from "./styles"

export default function OcupationItem(props) {
    return(
        <>
            <TitleOcupation>
                {props.title}
            </TitleOcupation>
            <TimeOcupation>
                {props.time}
            </TimeOcupation>
        </>
    )
}