import { Link } from "react-router-dom";

export default function Button({
   title = "Nous contacter",
   path,
   extraClass = '',
   onClick,
   type,
   disabled = false,
}) {
    return(
        <div className={ "btn " + extraClass }>
            <div>{ title }</div>
            { path
                ? <Link to={ path }><span>{ title }</span></Link>
                : <button type={ type || "button" } onClick={ onClick } disabled={ disabled }><span>{ title }</span></button>
            }
        </div>
    )
}
