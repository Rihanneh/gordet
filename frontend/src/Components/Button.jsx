import { Link } from "react-router-dom";

export default function Button({
   title = "Make An Appointment",
   path = '#',
   extraClass = '',
}) {

    return(
        <div className={ "btn " + extraClass }>
            <div>{ title }</div>
            <Link to={ path }>
                <span>{ title }</span>
            </Link>
        </div>
    )
}
