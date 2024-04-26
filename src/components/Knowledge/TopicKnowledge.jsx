import { Topic, TitleKnoledge } from "./styles"

export default function TopicKnowledge(props) {
    return(
        <>
            <Topic>
                <img src={props.img} alt="Figma" />
                <TitleKnoledge>{props.title}</TitleKnoledge>
            </Topic>
        </>
    )
}