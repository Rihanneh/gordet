import { useParams } from "react-router";

export default function Project() {

    let { slug } = useParams()

    // TODO: send request to backend to retrieve data for the project ID

    return (
        <div>{ slug }</div>
    )
}
