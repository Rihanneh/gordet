export default function Button({
   title = "Make An Appointment",
   href = '#',
   extraClass = '',
}) {

    return(
        <div className={ "btn " + extraClass }>
            <div>{ title }</div>
            <a href={ href }>
                <span>{ title }</span>
            </a>
        </div>
    )
}
