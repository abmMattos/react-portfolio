import { Topic } from "./styles"

export default function Section(props) {
    return(
        <>
            <Topic id={props.id}>
                <img src={props.img} />
                <p>{props.text}</p>
            </Topic>
        </>
    )
}