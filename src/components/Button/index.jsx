import { ButtonComponent } from "./styles"

export default function Button(props) {
    return(
        <>
            <a href={`${props.link}`} target="_blank"><ButtonComponent>{props.text}</ButtonComponent></a>
        </>
    )
}